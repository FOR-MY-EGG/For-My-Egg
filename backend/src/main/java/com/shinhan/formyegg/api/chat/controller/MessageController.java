package com.shinhan.formyegg.api.chat.controller;

import com.shinhan.formyegg.domain.chat.dto.ChatReq;
import com.shinhan.formyegg.domain.chat.dto.ChatRes;
import com.shinhan.formyegg.domain.chat.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
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
        ChatRes chat = chatService.sendChat(message);
        System.out.println(message);
        smso.convertAndSend("/topic/room."+message.getAffiliation(), chat);
    }
}
