package com.shinhan.formyegg.domain.comment.service;

import com.shinhan.formyegg.api.comment.dto.CommentRes;
import com.shinhan.formyegg.domain.comment.dto.CommentDto;

import java.util.List;

public interface CommentService {
	List<CommentRes> findCommentsByBoardId(long boardId);
}
