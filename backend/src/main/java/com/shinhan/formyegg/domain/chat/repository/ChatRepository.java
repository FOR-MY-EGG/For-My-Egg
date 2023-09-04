 package com.shinhan.formyegg.domain.chat.repository;

 import com.shinhan.formyegg.domain.chat.dto.ChatListRes;
 import com.shinhan.formyegg.domain.chat.entity.Chat;
 import org.springframework.data.jpa.repository.JpaRepository;
 import org.springframework.data.repository.query.Param;
 import org.springframework.stereotype.Repository;

 import java.util.List;

 @Repository
 public interface ChatRepository extends JpaRepository<Chat, Long> {
     List<Chat> findChatByAffiliationOrderByCreateDate(@Param("affiliation") int affiliation);
 }
