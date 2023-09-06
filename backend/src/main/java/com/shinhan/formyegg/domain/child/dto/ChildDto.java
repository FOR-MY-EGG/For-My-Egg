package com.shinhan.formyegg.domain.child.dto;


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

}
