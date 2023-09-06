package com.shinhan.formyegg.domain.invitation.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class InvitationDto {
    private Long familyId;
    private Long memberId;

}
