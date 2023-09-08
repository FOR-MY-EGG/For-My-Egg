package com.shinhan.formyegg.domain.invitation.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
public class InvitationId implements Serializable {
    private Long familyId;
    private Long memberId;
}
