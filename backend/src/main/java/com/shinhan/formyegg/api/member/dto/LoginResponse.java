package com.shinhan.formyegg.api.member.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private Long memberId;
    private Long groupId;
    private String nickname;
    private String accessToken;
    public static LoginResponse of(MemberDto memberDto, String token){
        return LoginResponse.builder()
                .memberId(memberDto.getMemberId())
                .nickname(memberDto.getNickname())
                .accessToken(token)
                .build();
    }
}
