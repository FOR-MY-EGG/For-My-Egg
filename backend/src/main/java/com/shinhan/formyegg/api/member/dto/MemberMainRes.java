package com.shinhan.formyegg.api.member.dto;


import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.shinhan.formyegg.domain.child.dto.ChildDto;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Builder
@Getter
@JsonNaming(value= PropertyNamingStrategies.SnakeCaseStrategy.class)
@NoArgsConstructor
@AllArgsConstructor
public class MemberMainRes {
    private String userName;
    private List<ChildDto> children;

    public static MemberMainRes from(MemberDto memberDto, List<ChildDto> childDtoList){
        return MemberMainRes.builder()
                .userName(memberDto.getName())
                .children(childDtoList)
                .build();
    }
}
