package com.shinhan.formyegg.domain.board.entity;

import com.shinhan.formyegg.domain.BaseTimeEntity;
import com.shinhan.formyegg.domain.member.entity.Member;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="member_id")
    private Member memberId;

    private int affiliation;

    @Column(nullable = false, length = 64)
    private String title;

    @Column(nullable = false, length = 512)
    private String content;

    @Column(nullable = false)
    @ColumnDefault("0")
    private int view;

    private String image;
}
