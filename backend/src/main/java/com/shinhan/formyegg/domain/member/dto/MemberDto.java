package com.shinhan.formyegg.domain.member.dto;

import com.shinhan.formyegg.api.member.dto.MemberNicknameRequest;
import com.shinhan.formyegg.api.member.dto.MemberProfileRequest;
import com.shinhan.formyegg.api.member.dto.MemberRequest;
import com.shinhan.formyegg.domain.member.entity.Member;
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
	public static MemberDto from(Member member){
		return MemberDto.builder()
				.address(member.getAddress())
				.incomeRank(member.getIncomeRank())
				.name(member.getName())
				.nickname(member.getNickname())
				.kakaoId(member.getKakaoId())
				.kakaoToken(member.getKakaoToken())
				.build();
	}
	public static MemberDto from(MemberRequest member){
		return MemberDto.builder()
				.kakaoId("2")
				.kakaoToken("1")
				.address(member.getAddress())
				.incomeRank(member.getIncomeRank())
				.name(member.getName())
				.nickname(member.getNickname())
				.build();
	}
	public static MemberDto from(MemberNicknameRequest member){
		return MemberDto.builder()
				.memberId(member.getMemberId())
				.nickname(member.getNickname())
				.build();
	}

	public static MemberDto from(MemberProfileRequest member){
		return MemberDto.builder()
				.memberId(member.getMemberId())
				.incomeRank(member.getIncomeRank())
				.address(member.getAddress())
				.build();
	}
}
