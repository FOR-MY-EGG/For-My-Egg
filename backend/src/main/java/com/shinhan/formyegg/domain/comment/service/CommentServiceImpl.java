package com.shinhan.formyegg.domain.comment.service;

import com.shinhan.formyegg.api.comment.dto.CommentReq;
import com.shinhan.formyegg.api.comment.dto.CommentRes;
import com.shinhan.formyegg.domain.board.entity.Board;
import com.shinhan.formyegg.domain.board.repository.BoardRepository;
import com.shinhan.formyegg.domain.chat.dto.ChatDto;
import com.shinhan.formyegg.domain.chat.entity.Chat;
import com.shinhan.formyegg.domain.chat.repository.ChatRepository;
import com.shinhan.formyegg.domain.chat.service.ChatService;
import com.shinhan.formyegg.domain.comment.dto.CommentDto;
import com.shinhan.formyegg.domain.comment.entity.Comment;
import com.shinhan.formyegg.domain.comment.repository.CommentRepository;
import com.shinhan.formyegg.domain.member.entity.Member;
import com.shinhan.formyegg.domain.member.repository.MemberRepository;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.BoardException;
import com.shinhan.formyegg.global.error.exception.MemberException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    @Override
    public List<CommentRes> findCommentsByBoardId(long boardId) {
        List<Comment> comments = commentRepository.findCommentsByBoardId_BoardIdOrderByCreateDate(boardId);
        return CommentRes.from(comments);
    }

    @Override
    public CommentRes createComment(long boardId, CommentReq commentReq) throws BoardException, MemberException{
        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        if(!optionalBoard.isPresent()) throw new BoardException(ErrorCode.NOT_EXIST_BOARD);
        Optional<Member> optionalMember = memberRepository.findById(commentReq.getMemberId());
        if(!optionalMember.isPresent()) throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);

        Comment comment = commentRepository.save(Comment.from(commentReq, optionalMember.get(), optionalBoard.get()));
        return CommentRes.from(comment);
    }
}

