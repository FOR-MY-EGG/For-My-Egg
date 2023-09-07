package com.shinhan.formyegg.domain.account.repository;

import com.shinhan.formyegg.domain.account.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findByAccountId(Long accountId);

    Optional<Account> findAccountByNumber(String number);

}
