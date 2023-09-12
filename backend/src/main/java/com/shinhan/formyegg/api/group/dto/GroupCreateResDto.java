package com.shinhan.formyegg.api.group.dto;

import com.shinhan.formyegg.domain.group.dto.GroupDto;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GroupCreateResDto {
    private Long groupId;
    private String uuid;
    public static GroupCreateResDto from(GroupDto groupDto){
        return GroupCreateResDto.builder()
                .groupId(groupDto.getFamilyId())
                .uuid(groupDto.getUuid())
                .build();
    }
}
