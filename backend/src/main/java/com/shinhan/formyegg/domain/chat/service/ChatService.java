 package com.shinhan.formyegg.domain.chat.service;

 import com.shinhan.formyegg.api.chat.dto.ChatReq;
 import com.shinhan.formyegg.api.chat.dto.ChatRes;
 import com.shinhan.formyegg.domain.chat.dto.ChatDto;
 import com.shinhan.formyegg.global.error.exception.MemberException;

 import java.util.List;

 public interface ChatService {
     List<ChatRes> findChatsByAffiliation(int affiliation);
     ChatDto sendChat(ChatDto chatDto) throws MemberException;
 }
