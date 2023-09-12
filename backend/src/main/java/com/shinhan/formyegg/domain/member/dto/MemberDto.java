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
	private String nickname;
	private String kakaoId;
	private String kakaoToken;
    private int isMember;

	public static MemberDto from(Member member){
		return MemberDto.builder()
				.memberId(member.getMemberId())
				.nickname(member.getNickname())
				.kakaoId(member.getKakaoId())
				.kakaoToken(member.getKakaoToken())
				.build();
	}

	public static MemberDto of(Member member, int isMember){
		return MemberDto.builder()
				.memberId(member.getMemberId())
				.nickname(member.getNickname())
				.kakaoId(member.getKakaoId())
				.kakaoToken(member.getKakaoToken())
				.isMember(isMember)
				.build();
	}
	public static MemberDto from(MemberRequest member){
		return MemberDto.builder()
				.kakaoId(member.getKakaoId())
				.kakaoToken(member.getKakaoToken())
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
				.build();
	}
}
