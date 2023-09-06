package com.shinhan.formyegg.domain.chat.dto;

import com.shinhan.formyegg.domain.chat.entity.Chat;
import com.shinhan.formyegg.domain.member.entity.Member;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ChatReq {
    private long writer;
    private int affiliation;
    private int type;
    private String content;

    public Chat toEntity(Member member) {
        return Chat.builder()
                .memberId(member)
                .affiliation(affiliation)
                .content(content)
                .type(type).build();
    }
}