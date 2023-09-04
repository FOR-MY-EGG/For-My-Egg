 package com.shinhan.formyegg.domain.chat.service;

 import com.shinhan.formyegg.domain.chat.dto.ChatListRes;
 import com.shinhan.formyegg.domain.chat.repository.ChatRepository;
 import lombok.RequiredArgsConstructor;
 import lombok.extern.slf4j.Slf4j;
 import org.springframework.stereotype.Service;

 import java.util.List;

 @Service
 @RequiredArgsConstructor
 @Slf4j
 public class ChatServiceImpl implements ChatService {
     private final ChatRepository chatRepository;

     @Override
     public List<ChatListRes> findChatsByAffiliation(int affiliation) {
         return chatRepository.findChatByAffiliationAndOrderByCreateDate(affiliation);
     }
 }

