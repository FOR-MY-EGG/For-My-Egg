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
public class MemberResponse {
    private Long memberId;
    private String address;
    private int incomeRank;
    private String name;
    private String nickname;
    private String kakaoId;
    private String kakaoToken;

    public static MemberResponse from(MemberDto memberDto){
        return MemberResponse.builder()
                .memberId(memberDto.getMemberId())
                .name(memberDto.getName())
                .nickname(memberDto.getNickname())
                .kakaoId(memberDto.getKakaoId())
                .kakaoToken(memberDto.getKakaoToken())
                .build();
    }
}