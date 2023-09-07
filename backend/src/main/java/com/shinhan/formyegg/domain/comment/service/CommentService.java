package com.shinhan.formyegg.domain.comment.service;

import com.shinhan.formyegg.domain.comment.dto.CommentDto;

import java.util.List;

public interface CommentService {
	List<CommentDto> findCommentsByBoardId(long boardId);
}
