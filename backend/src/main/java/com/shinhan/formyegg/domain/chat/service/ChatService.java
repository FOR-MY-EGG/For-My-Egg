 package com.shinhan.formyegg.domain.chat.service;

 import com.shinhan.formyegg.domain.chat.dto.ChatReq;
 import com.shinhan.formyegg.domain.chat.dto.ChatRes;

 import java.util.List;

 public interface ChatService {
     List<ChatRes> findChatsByAffiliation(int affiliation);
     ChatRes sendChat(ChatReq chatReq);
 }
