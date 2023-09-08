package com.shinhan.formyegg.domain.member.service;

import com.shinhan.formyegg.domain.child.dto.ChildDto;
import com.shinhan.formyegg.domain.child.entity.Child;
import com.shinhan.formyegg.domain.child.repository.ChildRepository;
import com.shinhan.formyegg.domain.invitation.entity.Invitation;
import com.shinhan.formyegg.domain.invitation.repository.InvitationRepository;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.entity.Member;
import com.shinhan.formyegg.global.error.ErrorCode;
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
		if (optionalMember.isEmpty())
			throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);
		else {
			optionalMember.get().updateNickname(memberDto.getNickname());
		}
		return MemberDto.from(optionalMember.get());
	}



  @Override
	public MemberDto login(long id) {
	  Optional<Member> optionalMember = memberRepository.findById(id);
	  if (!optionalMember.isPresent()) throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);
	  return MemberDto.from(optionalMember.get());
  }
    
  @Override
  public List<ChildDto> getMemberWithChildren(Long memberId) {
		//Get GroupId using memberId
		Optional<Invitation> optionalInvitation = invitationRepository.findInvitationByMemberId(memberId);
		if (optionalInvitation.isEmpty())
			throw new MemberException(ErrorCode.NOT_EXIST_GROUP);
		else {
			//Get Children Information using GroupId
			List<Child> children = childRepository.findAllByGroupId(optionalInvitation.get().getFamilyId().getFamilyId());
			if (children.isEmpty())
				throw new MemberException(ErrorCode.NOT_EXIST_KID);
			else {
				List<ChildDto> childDtoList = children.stream()
						.map(child -> {
							return ChildDto.from(child);
						}).collect(Collectors.toList());
				return childDtoList;
			}
		}
	}
}

