package com.shinhan.formyegg.domain.chat.entity;

import com.shinhan.formyegg.domain.BaseTimeEntity;
import com.shinhan.formyegg.domain.chat.dto.ChatDto;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.entity.Member;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Chat extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long chatId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="member_id")
    private Member writer;

    @Column(nullable = false)
    @ColumnDefault("0")
    private int affiliation;

    @Column(nullable = false)
    @ColumnDefault("0")
    private int type;

    private String content;

    public static Chat from(ChatDto chatDto, Member member){
        return Chat.builder()
                .writer(member)
                .affiliation(chatDto.getAffiliation())
                .type(chatDto.getType())
                .content(chatDto.getContent())
                .build();
    }
}
