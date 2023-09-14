package com.shinhan.formyegg.domain.chat.dto;

import com.shinhan.formyegg.api.chat.dto.ChatReq;
import com.shinhan.formyegg.domain.chat.entity.Chat;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.entity.Member;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
public class ChatDto {
    private long chatId;
    private long writer;
    private int affiliation;
    private int type;
    private String content;
    private LocalDateTime createDate;

    private String nickname;

    public static ChatDto from(ChatReq chatReq){
        return ChatDto.builder()
                .writer(chatReq.getWriter())
                .affiliation(chatReq.getAffiliation())
                .type(chatReq.getType())
                .content(chatReq.getContent())
                .build();
    }

    public static ChatDto from(Chat chat, String nickname){
        return ChatDto.builder()
                .chatId(chat.getChatId())
                .writer(chat.getWriter().getMemberId())
                .affiliation(chat.getAffiliation())
                .nickname(nickname)
                .type(chat.getType())
                .content(chat.getContent())
                .createDate(chat.getCreateDate())
                .build();
    }

    public static ChatDto from(Chat chat){
        return ChatDto.builder()
                .chatId(chat.getChatId())
                .writer(chat.getWriter().getMemberId())
                .affiliation(chat.getAffiliation())
                .type(chat.getType())
                .content(chat.getContent())
                .createDate(chat.getCreateDate())
                .build();
    }

    public static List<ChatDto> from(List<Chat> chats){
        List<ChatDto> chatDtos = new ArrayList<>();
        for(Chat chat : chats) {
            chatDtos.add(from(chat));
        }
        return chatDtos;
    }

}
