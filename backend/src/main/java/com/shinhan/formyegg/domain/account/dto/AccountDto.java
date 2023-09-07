package com.shinhan.formyegg.domain.account.dto;

import com.shinhan.formyegg.domain.account.entity.Account;
import lombok.Builder;
import lombok.Getter;


@Getter
@Builder
public class AccountDto {

    private Long accountId;

    private Long memberId;

    private String nickname;

    private String number;

    private Long balance;

    public static AccountDto from(Account account){
        return AccountDto.builder()
                .accountId(account.getAccountId())
                .memberId(account.getMemberId().getMemberId())
                .balance(account.getBalance())
                .nickname(account.getNickname())
                .number(account.getNumber())
                .build();
    }
}
