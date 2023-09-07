package com.shinhan.formyegg.domain.child.dto;


import com.shinhan.formyegg.domain.child.entity.Child;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ChildDto {
    private Long childId;
    private Long groupId;
    private Long accountId;
    private String name;
    private LocalDateTime birthDate;
    private String accountNickname;
    private String accountNumber;
    private Long accountBalance;

    public static ChildDto from(Child child){
        return ChildDto.builder()
                .childId(child.getChildId())
                .groupId(child.getGroupId().getFamilyId())
                .accountId(child.getAccountId().getAccountId())
                .name(child.getName())
                .birthDate(child.getBirthDate())
                .accountNickname(child.getAccountId().getNickname())
                .accountNumber(child.getAccountId().getNumber())
                .accountBalance(child.getAccountId().getBalance())
                .build();
    }
}
