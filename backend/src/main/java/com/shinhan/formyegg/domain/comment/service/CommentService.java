package com.shinhan.formyegg.domain.comment.service;

import com.shinhan.formyegg.api.comment.dto.CommentReq;
import com.shinhan.formyegg.api.comment.dto.CommentRes;
import com.shinhan.formyegg.domain.comment.dto.CommentDto;
import com.shinhan.formyegg.global.error.exception.BoardException;

import java.util.List;

public interface CommentService {
	List<CommentRes> findCommentsByBoardId(long boardId);

    CommentRes createComment(long boardId, CommentReq commentReq) throws BoardException;
}
