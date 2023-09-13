package com.shinhan.formyegg.domain.memo.entity;

import com.shinhan.formyegg.domain.BaseTimeEntity;
import com.shinhan.formyegg.domain.child.entity.Child;
import com.shinhan.formyegg.domain.group.entity.Group;
import com.shinhan.formyegg.domain.member.entity.Member;
import com.shinhan.formyegg.domain.memo.dto.MemoDto;
import lombok.*;
import org.checkerframework.checker.units.qual.C;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Memo{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memoId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="group_id")
    private Group groupId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="child_id")
    private Child childId;

    @Column(nullable = false)
    private int amount;

    @Column(nullable = false, length = 50)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String holder;

    private String image;

    @CreatedDate
    private LocalDate createDate;

    public static Memo of(Long groupId, MemoDto memoDto, String image){
        return Memo.builder()
                .groupId(Group.from(groupId))
                .childId(Child.from(memoDto.getChildId()))
                .amount(memoDto.getAmount())
                .title(memoDto.getTitle())
                .image(memoDto.getImage())
                .holder(memoDto.getHolder())
                .content(memoDto.getContent())
                .image(image)
                .build();
    }
}