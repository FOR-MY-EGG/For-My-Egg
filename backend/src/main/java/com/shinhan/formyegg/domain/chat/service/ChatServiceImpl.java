 package com.shinhan.formyegg.domain.chat.service;

 import com.shinhan.formyegg.domain.chat.dto.ChatListRes;
 import com.shinhan.formyegg.domain.chat.entity.Chat;
 import com.shinhan.formyegg.domain.chat.repository.ChatRepository;
 import lombok.RequiredArgsConstructor;
 import lombok.extern.slf4j.Slf4j;
 import org.springframework.stereotype.Service;

 import java.util.ArrayList;
 import java.util.List;

 @Service
 @RequiredArgsConstructor
 @Slf4j
 public class ChatServiceImpl implements ChatService {
     private final ChatRepository chatRepository;

     @Override
     public List<ChatListRes> findChatsByAffiliation(int affiliation) {
         List<Chat> chatList = chatRepository.findChatByAffiliationOrderByCreateDate(affiliation);
         List<ChatListRes> res = new ArrayList<>();
         for(Chat chat : chatList) {
             res.add(ChatListRes.builder()
                     .chatId(chat.getChatId())
                     .content(chat.getContent())
                     .createdDate(chat.getCreateDate())
                     .writer(chat.getMember().getMemberId())
                     .type(chat.getType()).build());
         }
         return res;
     }
 }

