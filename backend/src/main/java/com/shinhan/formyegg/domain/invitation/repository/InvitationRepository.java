package com.shinhan.formyegg.domain.invitation.repository;

import com.shinhan.formyegg.domain.invitation.dto.InvitationDto;
import com.shinhan.formyegg.domain.invitation.entity.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InvitationRepository extends JpaRepository<Invitation, Long> {
    Optional<Invitation> findInvitationByMemberId(Long memberId);
}
