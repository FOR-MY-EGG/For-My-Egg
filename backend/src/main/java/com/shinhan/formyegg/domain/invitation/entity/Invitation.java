 package com.shinhan.formyegg.domain.invitation.entity;

 import com.shinhan.formyegg.domain.group.entity.Group;
 import com.shinhan.formyegg.domain.member.entity.Member;

 import lombok.*;

 import javax.persistence.*;
 import java.io.Serializable;

 @Entity(name = "invitation")
 @AllArgsConstructor
 @NoArgsConstructor(access = AccessLevel.PROTECTED)
 @Getter
 @Setter
 @Builder
 @IdClass(InvitationId.class)
 public class Invitation{

     @Id
     @ManyToOne(fetch = FetchType.LAZY)
     @JoinColumn(name = "group_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
     private Group familyId;

     @Id
     @OneToOne(fetch = FetchType.LAZY)
     @JoinColumn(name = "member_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
     private Member memberId;

    public static Invitation of(Member member, Group group){
        return Invitation.builder()
                .memberId(member)
                .familyId(group)
                .build();
    }

 }
