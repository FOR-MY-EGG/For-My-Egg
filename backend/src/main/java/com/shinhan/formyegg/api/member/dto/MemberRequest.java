package com.shinhan.formyegg.api.member.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import lombok.*;

@Builder
@Getter
@JsonNaming(value= PropertyNamingStrategies.SnakeCaseStrategy.class)
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MemberRequest {
    private String nickname;
    private String kakaoToken;
    private String kakaoId;
}
