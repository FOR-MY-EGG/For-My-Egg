package com.shinhan.formyegg.domain.account.service;

import com.shinhan.formyegg.domain.account.dto.AccountDto;
import com.shinhan.formyegg.domain.account.entity.Account;
import com.shinhan.formyegg.domain.account.repository.AccountRepository;
import com.shinhan.formyegg.domain.member.repository.MemberRepository;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.AccountException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AccountServiceImpl implements AccountService{

    private final AccountRepository accountRepository;

    @Override
    public AccountDto createAccount(AccountDto accountDto) {
        Account account = Account.from(accountDto);
        accountRepository.save(account);
        return AccountDto.from(account);
    }

//    @Override
//    public Optional<AccountDto> getAccountByAccountId(Long accountId) {
//        return Optional.empty();
//    }

    @Override
    public Optional<AccountDto> getAccountByAccountNumber(String accountNumber) {
        return Optional.empty();
    }

    @Override
    public AccountDto updateNickname(AccountDto accountDto) {
        Optional<Account> optionalAccount = accountRepository.findAccountByNumber(accountDto.getNumber());
        if(optionalAccount.isEmpty()){
            throw new AccountException(ErrorCode.NOT_EXIST_MEMBER);
        }
        optionalAccount.get().updateNickname(accountDto.getNickname());
        return accountDto;
    }

    @Override
    public List<AccountDto> getAccountByMemberId(Long memberId) {
        return null;
    }
}
