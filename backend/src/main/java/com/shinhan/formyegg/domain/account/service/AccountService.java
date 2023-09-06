package com.shinhan.formyegg.domain.account.service;

import com.shinhan.formyegg.domain.account.dto.AccountDto;

import java.util.List;
import java.util.Optional;

public interface AccountService {

    Optional<AccountDto> getAccountByAccountId(Long accountId);
    Optional<AccountDto> getAccountByAccountNumber(String accountNumber);
    AccountDto createAccount(AccountDto accountDto);
    List<AccountDto> getAccountByMemberId(Long memberId);
}
