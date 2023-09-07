package com.shinhan.formyegg.domain.account.service;

import com.shinhan.formyegg.domain.account.dto.AccountDto;

import java.util.List;
import java.util.Optional;

public interface AccountService {
    AccountDto getAccountByAccountNumber(String accountNumber);
    AccountDto updateNickname(AccountDto accountDto);
}
