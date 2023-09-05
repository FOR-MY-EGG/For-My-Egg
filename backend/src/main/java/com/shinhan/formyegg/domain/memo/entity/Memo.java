package com.shinhan.formyegg.domain.memo.entity;

import com.shinhan.formyegg.domain.BaseTimeEntity;
import com.shinhan.formyegg.domain.child.entity.Child;
import com.shinhan.formyegg.domain.member.entity.Member;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Memo extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memoId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="member_id")
    private Member memberId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="child_id")
    private Child childId;

    @Column(nullable = false)
    private int amount;

    @Column(nullable = false, length = 50)
    private String title;

    @Column(nullable = false)
    private String content;

    private String image;
}