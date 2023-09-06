 package com.shinhan.formyegg.domain.chat.service;

 import com.shinhan.formyegg.domain.chat.dto.ChatReq;
 import com.shinhan.formyegg.domain.chat.dto.ChatRes;
 import com.shinhan.formyegg.domain.chat.entity.Chat;
 import com.shinhan.formyegg.domain.chat.repository.ChatRepository;
 import com.shinhan.formyegg.domain.member.entity.Member;
 import com.shinhan.formyegg.domain.member.repository.MemberRepository;
 import com.shinhan.formyegg.global.error.ErrorCode;
 import com.shinhan.formyegg.global.error.exception.MemberException;
 import lombok.RequiredArgsConstructor;
 import lombok.extern.slf4j.Slf4j;
 import org.springframework.stereotype.Service;

 import java.util.List;
 import java.util.Optional;

 @Service
 @RequiredArgsConstructor
 @Slf4j
 public class ChatServiceImpl implements ChatService {
     private final ChatRepository chatRepository;
     private final MemberRepository memberRepository;
     @Override
     public List<ChatRes> findChatsByAffiliation(int affiliation) {
         return chatRepository.findChatByAffiliationAndOrderByCreateDate(affiliation);
     }

     @Override
     public ChatRes sendChat(ChatReq chatReq) throws MemberException {
         Optional<Member> optionalMember = memberRepository.findByMemberId(chatReq.getWriter());
         if(!optionalMember.isPresent()) throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);
         ChatRes tmp = ChatRes.builder().build();
         return tmp;
//         return chatRepository.save(chatReq.toEntity(optionalMember.get()));
     }
 }

