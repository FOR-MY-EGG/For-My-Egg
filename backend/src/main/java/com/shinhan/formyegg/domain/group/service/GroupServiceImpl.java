package com.shinhan.formyegg.domain.group.service;

import com.shinhan.formyegg.domain.group.dto.GroupDto;
import com.shinhan.formyegg.domain.group.entity.Group;
import com.shinhan.formyegg.domain.group.repository.GroupRepository;
import com.shinhan.formyegg.domain.invitation.entity.Invitation;
import com.shinhan.formyegg.domain.invitation.repository.InvitationRepository;
import com.shinhan.formyegg.domain.member.entity.Member;
import com.shinhan.formyegg.domain.member.repository.MemberRepository;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.GroupException;
import com.shinhan.formyegg.global.error.exception.MemberException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.UUID;

@Transactional
@Service
@RequiredArgsConstructor
public class GroupServiceImpl implements GroupService {

    private final GroupRepository groupRepository;
    private final InvitationRepository invitationRepository;
    private final MemberRepository memberRepository;
    @Override
    public GroupDto createGroup(Long memberId) {
        Optional<Member> member = memberRepository.findByMemberId(memberId);
        if(member.isEmpty()) throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);

        Optional<Invitation> invitation = invitationRepository.findInvitationByMemberId_MemberId(member.get().getMemberId());
        if(!invitation.isEmpty()) throw new GroupException(ErrorCode.ALREADY_EXIST_GROUP);

        String uuid = UUID.randomUUID().toString();
        Group save = groupRepository.save(Group.from(uuid));

        invitationRepository.save(Invitation.of(member.get(), save));
        return GroupDto.from(save);
    }

    @Override
    public GroupDto invitateGroup(Long memberId, GroupDto groupDto) {
        Optional<Member> member = memberRepository.findByMemberId(memberId);
        if(member.isEmpty()) throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);

        Optional<Invitation> invitation = invitationRepository.findInvitationByMemberId_MemberId(member.get().getMemberId());
        if(!invitation.isEmpty()) throw new GroupException(ErrorCode.ALREADY_EXIST_GROUP);

        Optional<Group> group = groupRepository.findGroupByUuid(groupDto.getUuid());
        if(group.isEmpty()) throw new GroupException(ErrorCode.NOT_EXIST_GROUP);

        invitationRepository.save(Invitation.of(member.get(), group.get()));
        return GroupDto.from(group.get());
    }

    public String getGroupCode(Long memberId){
        Optional<Invitation> invitation = invitationRepository.findInvitationByMemberId_MemberId(memberId);
        return invitation.get().getFamilyId().getUuid();
    }
}
