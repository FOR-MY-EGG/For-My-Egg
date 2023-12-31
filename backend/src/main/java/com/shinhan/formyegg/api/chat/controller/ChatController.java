 package com.shinhan.formyegg.api.chat.controller;

 import com.shinhan.formyegg.api.chat.dto.ChatRes;
 import com.shinhan.formyegg.domain.chat.service.ChatService;
 import io.swagger.annotations.Api;
 import io.swagger.annotations.ApiOperation;
 import lombok.RequiredArgsConstructor;
 import org.springframework.http.ResponseEntity;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.PathVariable;
 import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.RestController;

 import java.util.List;

 @Api(value = "채팅 API", tags = {"Chat"})
 @RestController
 @RequiredArgsConstructor
 @RequestMapping("/api/chat")
 public class ChatController {
     private final ChatService chatService;

     @ApiOperation(value = "채팅 내역 조회", notes = "커뮤니티 타입으로 채팅 내역 조회")
     @GetMapping("/{affiliation}")
     public ResponseEntity<List<ChatRes>> getChatsByAffiliation(@PathVariable int affiliation) {
         return ResponseEntity.ok().body(chatService.findChatsByAffiliation(affiliation));
     }
 }
