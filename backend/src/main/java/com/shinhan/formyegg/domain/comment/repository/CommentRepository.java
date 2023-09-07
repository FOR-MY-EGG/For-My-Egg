package com.shinhan.formyegg.domain.comment.repository;

import com.shinhan.formyegg.domain.chat.dto.ChatDto;
import com.shinhan.formyegg.domain.chat.entity.Chat;
import com.shinhan.formyegg.domain.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findCommentsByBoardIdOrderByCreateDate(long boardId);
}
