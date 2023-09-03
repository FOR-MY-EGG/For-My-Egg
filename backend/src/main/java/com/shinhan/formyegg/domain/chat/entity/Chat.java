package com.shinhan.formyegg.domain.chat.entity;

import com.shinhan.formyegg.domain.BaseTimeEntity;
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
    @Column
    private long chatId;
//    @ManyToOne
//    @JoinColumn(name="memberId")
//    private Member member;
    private String content;
    private int affiliation;
    private int type;
}
