package com.shinhan.formyegg.domain.group.dto;


import com.shinhan.formyegg.api.group.dto.GroupCreateReqDto;
import com.shinhan.formyegg.domain.group.entity.Group;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GroupDto {
    private Long familyId;
    private String uuid;

    public static GroupDto from(GroupCreateReqDto groupCreateReqDto){
        return GroupDto.builder()
                .uuid(groupCreateReqDto.getUuid())
                .build();
    }

    public static GroupDto from(Group group){
        return GroupDto.builder()
                .familyId(group.getFamilyId())
                .uuid(group.getUuid())
                .build();
    }

}
