package com.shinhan.formyegg.domain.account.service;

import com.shinhan.formyegg.domain.account.dto.AccountDto;
import com.shinhan.formyegg.domain.account.repository.AccountRepository;
import com.shinhan.formyegg.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AccountServiceImpl implements AccountService{

    private final MemberRepository memberRepository;
    private final AccountRepository accountRepository;

    @Override
    public Optional<AccountDto> getAccountByAccountId(Long accountId) {
        return Optional.empty();
    }

    @Override
    public Optional<AccountDto> getAccountByAccountNumber(String accountNumber) {
        return Optional.empty();
    }

    @Override
    public AccountDto createAccount(AccountDto accountDto) {
        return null;
    }

    @Override
    public List<AccountDto> getAccountByMemberId(Long memberId) {
        return null;
    }
}
