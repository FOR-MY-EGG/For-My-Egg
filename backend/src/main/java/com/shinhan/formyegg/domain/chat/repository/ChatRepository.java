 package com.shinhan.formyegg.domain.chat.repository;

 import com.shinhan.formyegg.api.chat.dto.ChatRes;
 import com.shinhan.formyegg.domain.chat.dto.ChatDto;
 import com.shinhan.formyegg.domain.chat.entity.Chat;
 import org.springframework.data.jpa.repository.JpaRepository;
 import org.springframework.data.repository.query.Param;
 import org.springframework.stereotype.Repository;

 import java.util.List;

 @Repository
 public interface ChatRepository extends JpaRepository<Chat, Long> {
     List<ChatDto> findChatByAffiliationOrderByCreateDate(@Param("affiliation") int affiliation);
 }
