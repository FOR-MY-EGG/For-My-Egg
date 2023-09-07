package com.shinhan.formyegg.api.chat.dto;

import com.shinhan.formyegg.domain.chat.dto.ChatDto;
import com.shinhan.formyegg.domain.chat.entity.Chat;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
public class ChatRes {
    private long chatId;
    private long writer;
    private int type;
    private String content;
    private LocalDateTime createdDate;

    public static ChatRes from(ChatDto chatDto) {
        return ChatRes.builder()
                .chatId(chatDto.getChatId())
                .writer(chatDto.getWriter())
                .type(chatDto.getType())
                .content(chatDto.getContent())
                .createdDate(chatDto.getCreateDate())
                .build();
    }

    public static List<ChatRes> from(List<ChatDto> chatDtoList) {
        List<ChatRes> chatResList = new ArrayList<>();
        for(ChatDto chatDto : chatDtoList) {
            chatResList.add(
                    ChatRes.builder()
                    .chatId(chatDto.getChatId())
                    .writer(chatDto.getWriter())
                    .type(chatDto.getType())
                    .content(chatDto.getContent())
                    .createdDate(chatDto.getCreateDate())
                    .build());
        }
        return chatResList;
    }
}
