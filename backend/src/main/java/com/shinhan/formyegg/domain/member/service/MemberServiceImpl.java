package com.shinhan.formyegg.domain.member.service;

import com.shinhan.formyegg.domain.child.dto.ChildDto;
import com.shinhan.formyegg.domain.child.entity.Child;
import com.shinhan.formyegg.domain.child.repository.ChildRepository;
import com.shinhan.formyegg.domain.invitation.dto.InvitationDto;
import com.shinhan.formyegg.domain.invitation.entity.Invitation;
import com.shinhan.formyegg.domain.invitation.repository.InvitationRepository;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.entity.Member;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.BusinessException;
import com.shinhan.formyegg.global.error.exception.MemberException;
import org.springframework.stereotype.Service;

import com.shinhan.formyegg.domain.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService {
	private final MemberRepository memberRepository;
	private final InvitationRepository invitationRepository;
	private final ChildRepository childRepository;

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
		if (optionalMember.isEmpty())
			throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);
		else {
			optionalMember.get().updateNickname(memberDto.getNickname());
		}
		return MemberDto.from(optionalMember.get());
	}



  @Override
	public MemberDto login(MemberDto memberDto) {
	  Optional<Member> optionalMember = memberRepository.findByKakaoId(memberDto.getKakaoId());
	  if (!optionalMember.isPresent()) {
		  // 가입된 회원이 아니므로 회원가입
		  Member member = memberRepository.save(Member.from(memberDto));
		  return MemberDto.of(member, 0);
	  }else{
		  // 로그인
		  optionalMember.get().updateKakaoToken(memberDto.getKakaoToken());
		  Optional<Invitation> invitation =
				  invitationRepository.findInvitationByMemberId_MemberId(optionalMember.get().getMemberId());
		  if(invitation.isEmpty())
			  return MemberDto.of(optionalMember.get(), 0);
		  return MemberDto.of(optionalMember.get(), 1);
	  }
  }
    
  @Override
  public List<ChildDto> getMemberWithChildren(Long memberId) {
		//Get GroupId using memberId
		Optional<Invitation> optionalInvitation = invitationRepository.findInvitationByMemberId_MemberId(memberId);

		if (optionalInvitation.isEmpty())
			throw new MemberException(ErrorCode.NOT_EXIST_GROUP);

		InvitationDto invitationDto = InvitationDto.from(optionalInvitation.get());

		List<Child> children = childRepository.findAllByGroupId_FamilyId(invitationDto.getFamilyId());
		if(children.isEmpty()) throw new BusinessException(ErrorCode.NOT_EXIST_GROUP);
	  System.out.println(children);
		System.out.println(children.size());
		return children.stream()
					.map(ChildDto::from).collect(Collectors.toList());

	}
}

