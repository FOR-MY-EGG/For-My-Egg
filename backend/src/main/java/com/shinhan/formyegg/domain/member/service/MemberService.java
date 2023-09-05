package com.shinhan.formyegg.domain.member.service;

import java.util.Optional;

import com.shinhan.formyegg.domain.member.dto.MemberDto;

public interface MemberService {
	MemberDto createMember(MemberDto memberDto);

	MemberDto getMemberByKakaoId(String kakaoId);

	MemberDto getMemberByMemberId(Long memberId);

	MemberDto updateNickname(MemberDto memberDto);

	MemberDto updateProfile(MemberDto memberDto);
}
