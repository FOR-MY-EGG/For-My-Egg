package com.shinhan.formyegg.domain.member.service;

import com.shinhan.formyegg.domain.member.dto.MemberDto;
import org.springframework.stereotype.Service;

import com.shinhan.formyegg.domain.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{
	private final MemberRepository memberRepository;

	@Override
	public MemberDto createMember(MemberDto memberDto) {
		return null;
	}

	@Override
	public Optional<MemberDto> getMemberByKakaoId(String kakaoId) {
		return Optional.empty();
	}

	@Override
	public Optional<MemberDto> getMemberByMemberId(Long memberId) {
		return Optional.empty();
	}

	@Override
	public MemberDto updateNickname(MemberDto memberDto) {
		return null;
	}

	@Override
	public MemberDto updateProfile(MemberDto memberDto) {
		return null;
	}
}
