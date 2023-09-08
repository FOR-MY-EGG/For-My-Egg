package com.shinhan.formyegg.api.account.controller;

import com.shinhan.formyegg.api.account.dto.AccountReqDto;
import com.shinhan.formyegg.domain.account.dto.AccountDto;
import com.shinhan.formyegg.domain.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/account")
public class AccountController {
    private final AccountService accountService;
    @PatchMapping
    public ResponseEntity<AccountDto> modifyNickname(@RequestBody AccountReqDto accountReqDto){
        AccountDto accountDto = accountService.updateNickname(AccountDto.from(accountReqDto));
        return ResponseEntity.status(HttpStatus.OK).body(accountDto);
    }

    @GetMapping("/{accountNumber}")
    public ResponseEntity<AccountDto> getAccount(@PathVariable String accountNumber){
        AccountDto accountDto = accountService.getAccountByAccountNumber(accountNumber);
        return ResponseEntity.status(HttpStatus.OK).body(accountDto);
    }
}
