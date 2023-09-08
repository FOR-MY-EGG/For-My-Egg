package com.shinhan.formyegg.api.child.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.shinhan.formyegg.api.member.dto.MemberResponse;
import com.shinhan.formyegg.domain.account.dto.AccountDto;
import com.shinhan.formyegg.domain.child.dto.ChildDto;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@JsonNaming(value= PropertyNamingStrategies.SnakeCaseStrategy.class)
@NoArgsConstructor
@AllArgsConstructor
public class ChildAccountRes {
    private Long balance;

    public static ChildAccountRes from(ChildDto childDto){
        return ChildAccountRes.builder()
                .balance(childDto.getAccountBalance())
                .build();
    }
}
