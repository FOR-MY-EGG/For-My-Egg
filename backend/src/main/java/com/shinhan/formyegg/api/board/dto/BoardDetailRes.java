package com.shinhan.formyegg.api.board.dto;

import com.shinhan.formyegg.api.comment.dto.CommentRes;
import com.shinhan.formyegg.domain.board.dto.BoardDto;
import com.shinhan.formyegg.domain.comment.dto.CommentDto;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class BoardDetailRes {
    private long boardId;
    private long writer;
    private String title;
    private String content;
    private int view;
    private LocalDateTime createdDate;
    private String image;
    private List<CommentRes> comments;

    public static BoardDetailRes from(BoardDto boardDto, List<CommentRes> comments) {
        List<CommentRes> commentResList = new ArrayList<>();
        for(CommentRes commentDto: comments) {
            commentResList.add(
                    CommentRes.builder()
                            .commentId(commentDto.getCommentId())
                            .nickname(commentDto.getNickname())
                            .createDate(commentDto.getCreateDate())
                            .content(commentDto.getContent())
                            .build()
            );
        }
        return BoardDetailRes.builder()
                .boardId(boardDto.getBoardId())
                .writer(boardDto.getWriter())
                .title(boardDto.getTitle())
                .content(boardDto.getContent())
                .view(boardDto.getView())
                .createdDate(boardDto.getCreateDate())
                .image(boardDto.getImage())
                .comments(commentResList)
                .build();
    }
}