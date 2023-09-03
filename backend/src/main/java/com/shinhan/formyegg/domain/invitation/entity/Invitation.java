package com.shinhan.formyegg.domain.invitation.entity;

import com.shinhan.formyegg.domain.account.entity.Account;
import com.shinhan.formyegg.domain.group.entity.Group;
import lombok.*;

import javax.persistence.*;

@Entity(name = "invitation")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Invitation {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Group family;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Member member;
}
