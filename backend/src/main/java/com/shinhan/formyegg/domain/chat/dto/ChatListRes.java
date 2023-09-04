package com.shinhan.formyegg.domain.chat.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ChatListRes {
    private long chatId;
    private long writer;
    private int type;
    private String content;
    private LocalDateTime createdDate;
}
