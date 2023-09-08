package com.shinhan.formyegg.domain.member.service;

import java.util.List;
import java.util.Optional;

import com.shinhan.formyegg.domain.child.dto.ChildDto;
import com.shinhan.formyegg.domain.member.dto.MemberDto;

public interface MemberService {
	MemberDto createMember(MemberDto memberDto);

	MemberDto getMemberByKakaoId(String kakaoId);

	MemberDto getMemberByMemberId(Long memberId);

	MemberDto updateNickname(MemberDto memberDto);

	MemberDto updateProfile(MemberDto memberDto);

	List<ChildDto> getMemberWithChildren(Long memberId);
}
