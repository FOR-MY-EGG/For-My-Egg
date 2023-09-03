package com.shinhan.formyegg.api.chat.controller;

import com.shinhan.formyegg.domain.chat.dto.ChatListRes;
import com.shinhan.formyegg.domain.chat.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat")
public class ChatController {
    private final ChatService chatService;

    @GetMapping("/{affiliation}")
    public ResponseEntity<List<ChatListRes>> getChatRoomsByMemberNo(@PathVariable int affiliation) {
        return ResponseEntity.ok().body(chatService.findChatsByAffiliation(affiliation));
    }
}
