package com.shinhan.formyegg.domain.member.service;

import java.util.Optional;

import com.shinhan.formyegg.domain.member.dto.MemberDto;

public interface MemberService {
	MemberDto createMember(MemberDto memberDto);

	Optional<MemberDto> getMemberByKakaoId(String kakaoId);

	Optional<MemberDto> getMemberByMemberId(Long memberId);

	MemberDto updateProfile(MemberDto memberDto);
}
