package com.shinhan.formyegg.api.chat.controller;

import com.shinhan.formyegg.api.chat.dto.ChatReq;
import com.shinhan.formyegg.api.chat.dto.ChatRes;
import com.shinhan.formyegg.domain.chat.dto.ChatDto;
import com.shinhan.formyegg.domain.chat.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MessageController {
    private final SimpMessageSendingOperations smso;
    private final ChatService chatService;


    @MessageMapping("chat.message")
    public void message(ChatReq message) {
        ChatDto chatDto = chatService.sendChat(ChatDto.from(message));
        smso.convertAndSend("/topic/room."+message.getAffiliation(), ChatRes.from(chatDto));
    }
}
