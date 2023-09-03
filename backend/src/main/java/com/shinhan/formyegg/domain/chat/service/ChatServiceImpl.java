// package com.shinhan.formyegg.domain.chat.service;
//
// import com.shinhan.formyegg.domain.chat.dto.ChatListRes;
// import com.shinhan.formyegg.domain.chat.repository.ChatRepo;
// import lombok.RequiredArgsConstructor;
// import lombok.extern.slf4j.Slf4j;
// import org.springframework.stereotype.Service;
//
// import java.util.List;
//
// @Service
// @RequiredArgsConstructor
// @Slf4j
// public class ChatServiceImpl implements ChatService {
//     private final ChatRepo chatRepo;
//
//     @Override
//     public List<ChatListRes> findChatsByAffiliation(int affiliation) {
//         return chatRepo.findChatByAffiliationAndOrderByCreateDate(affiliation);
//     }
// }
//
