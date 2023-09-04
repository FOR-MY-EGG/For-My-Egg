package com.shinhan.formyegg.domain.chat.entity;

import com.shinhan.formyegg.domain.BaseTimeEntity;
import com.shinhan.formyegg.domain.member.entity.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Chat extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long chatId;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(nullable = false, name="writer")
    private Member member;
    @Column(nullable = false, length = 255)
    private String content;
    @Column(nullable = false)
    private int affiliation;
    @Column(nullable = false, columnDefinition = "TINYINT", length = 4)
    private int type;
}
