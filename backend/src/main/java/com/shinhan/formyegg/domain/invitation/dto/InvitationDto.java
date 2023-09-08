package com.shinhan.formyegg.domain.invitation.dto;

import com.shinhan.formyegg.domain.invitation.entity.Invitation;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class InvitationDto {
    private Long familyId;
    private Long memberId;

    public static InvitationDto from(Invitation invitation){
        return InvitationDto.builder()
                .familyId(invitation.getFamilyId().getFamilyId())
                .memberId(invitation.getMemberId().getMemberId())
                .build();
    }
}
