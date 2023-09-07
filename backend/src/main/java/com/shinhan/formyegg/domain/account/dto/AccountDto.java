package com.shinhan.formyegg.domain.account.dto;

import com.shinhan.formyegg.api.account.dto.AccountReqDto;
import com.shinhan.formyegg.domain.account.entity.Account;
import lombok.Builder;
import lombok.Getter;


@Getter
@Builder
public class AccountDto {

    private Long accountId;

    private String nickname;

    private String number;

    private Long balance;

    public static AccountDto from(Account account){
        return AccountDto.builder()
                .accountId(account.getAccountId())
                .balance(account.getBalance())
                .nickname(account.getNickname())
                .number(account.getNumber())
                .build();
    }

    public static AccountDto from(AccountReqDto accountReqDto){
        return AccountDto.builder()
                .number(accountReqDto.getAccountNumber())
                .nickname(accountReqDto.getNickname())
                .build();
    }
}
