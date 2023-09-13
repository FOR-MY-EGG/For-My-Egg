 package com.shinhan.formyegg.domain.chat.service;

 import com.shinhan.formyegg.api.chat.dto.ChatReq;
 import com.shinhan.formyegg.api.chat.dto.ChatRes;
 import com.shinhan.formyegg.domain.chat.dto.ChatDto;
 import com.shinhan.formyegg.domain.chat.entity.Chat;
 import com.shinhan.formyegg.domain.chat.repository.ChatRepository;
 import com.shinhan.formyegg.domain.member.entity.Member;
 import com.shinhan.formyegg.domain.member.repository.MemberRepository;
 import com.shinhan.formyegg.global.error.ErrorCode;
 import com.shinhan.formyegg.global.error.exception.AffiliationException;
 import com.shinhan.formyegg.global.error.exception.BoardException;
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
         if(affiliation < 0 || affiliation >= 3) throw new AffiliationException(ErrorCode.NOT_EXIST_AFFILIATION);
         return chatRepository.findChatByAffiliationOrderByCreateDate(affiliation);
     }

     @Override
     public ChatDto sendChat(ChatDto chatDto) throws MemberException {
         Optional<Member> optionalMember = memberRepository.findByMemberId(chatDto.getWriter());
         if(!optionalMember.isPresent()) throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);
         Chat chat = chatRepository.save(Chat.from(chatDto, optionalMember.get()));
         return ChatDto.from(chat, optionalMember.get().getNickname());
     }
 }

