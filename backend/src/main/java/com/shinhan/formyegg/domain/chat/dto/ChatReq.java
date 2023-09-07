package com.shinhan.formyegg.domain.chat.dto;

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