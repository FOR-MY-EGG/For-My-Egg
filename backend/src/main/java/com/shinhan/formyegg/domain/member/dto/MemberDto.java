package com.shinhan.formyegg.domain.member.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberDto {
	private Long memberId;
	private String address;
	private int incomeRank;
	private String name;
	private String nickname;
	private String kakaoId;
	private String kakaoToken;
}
