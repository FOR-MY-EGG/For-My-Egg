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
	private String deviceToken;
	private long groupId;

	public static MemberDto from(Member member){
		return MemberDto.builder()
				.memberId(member.getMemberId())
				.nickname(member.getNickname())
				.kakaoId(member.getKakaoId())
				.kakaoToken(member.getKakaoToken())
				.deviceToken(member.getDeviceToken())
				.build();
	}

	public static MemberDto of(Member member, int isMember, long groupId){
		return MemberDto.builder()
				.memberId(member.getMemberId())
				.nickname(member.getNickname())
				.kakaoId(member.getKakaoId())
				.kakaoToken(member.getKakaoToken())
				.isMember(isMember)
				.groupId(groupId)
				.build();
	}
	public static MemberDto from(MemberRequest member){
		return MemberDto.builder()
				.kakaoId(member.getKakaoId())
				.kakaoToken(member.getKakaoToken())
				.nickname(member.getNickname())
				.deviceToken(member.getDeviceToken())
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
