package com.shinhan.formyegg.domain.group.dto;


import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GroupDto {
    private Long familyId;
    private String uuid;

}
