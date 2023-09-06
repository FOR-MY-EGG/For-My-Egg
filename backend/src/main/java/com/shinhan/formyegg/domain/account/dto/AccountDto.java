package com.shinhan.formyegg.domain.account.dto;

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
}
