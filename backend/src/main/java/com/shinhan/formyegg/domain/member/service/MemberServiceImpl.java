package com.shinhan.formyegg.domain.member.service;

import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.entity.Member;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.MemberException;
import org.springframework.stereotype.Service;

import com.shinhan.formyegg.domain.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService{
	private final MemberRepository memberRepository;

	@Override
	public MemberDto createMember(MemberDto memberDto) {
		Member member = Member.from(memberDto);
		memberRepository.save(member);
		return MemberDto.from(member);
	}

	@Override
	public MemberDto getMemberByKakaoId(String kakaoId) {
		Optional<Member> optionalMember = memberRepository.findByKakaoId(kakaoId);
		return MemberDto.from(optionalMember.orElseThrow(() -> new MemberException(ErrorCode.NOT_EXIST_MEMBER)));
	}

	@Override
	public MemberDto getMemberByMemberId(Long memberId) {
		Optional<Member> optionalMember = memberRepository.findByMemberId(memberId);
		return MemberDto.from(optionalMember.orElseThrow(() -> new MemberException(ErrorCode.NOT_EXIST_MEMBER)));
	}

	@Override
	public MemberDto updateNickname(MemberDto memberDto) {
		Optional<Member> optionalMember = memberRepository.findByMemberId(memberDto.getMemberId());
		if(optionalMember.isEmpty())
			throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);
		else{
			optionalMember.get().updateNickname(memberDto.getNickname());
		}
		return MemberDto.from(optionalMember.get());
	}

	@Override
	public MemberDto updateProfile(MemberDto memberDto) {
		Optional<Member> optionalMember = memberRepository.findByMemberId(memberDto.getMemberId());
		if(optionalMember.isEmpty())
			throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);
		else{
			optionalMember.get().updateAddressAndIncomeRank(memberDto.getAddress(), memberDto.getIncomeRank());
		}
		return MemberDto.from(optionalMember.get());
	}
}
