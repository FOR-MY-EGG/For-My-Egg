package com.shinhan.formyegg.domain.child.dto;


import com.shinhan.formyegg.domain.child.entity.Child;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.time.temporal.WeekFields;
import java.util.Locale;

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
    private Long dDay;
    private int weeks;

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
                .dDay(getDDay(child.getBirthDate()))
                .weeks(getWeeks(child.getBirthDate()))
                .build();
    }

    private static Long getDDay(LocalDateTime birthDate){
        LocalDateTime currentDateTime = LocalDateTime.now();
        long daysDiff = ChronoUnit.DAYS.between(currentDateTime, birthDate);
        return daysDiff;
    }

    private static int getWeeks(LocalDateTime birthDate){
        WeekFields weekFields = WeekFields.of(Locale.getDefault());
        int weekNumber = birthDate.get(weekFields.weekOfWeekBasedYear());
        return weekNumber;
    }
}
