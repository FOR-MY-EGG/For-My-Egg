package com.shinhan.formyegg.api.chat.dto;

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
}