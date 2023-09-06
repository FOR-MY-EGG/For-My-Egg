package com.shinhan.formyegg.api.board.dto;

import com.shinhan.formyegg.api.chat.dto.ChatRes;
import com.shinhan.formyegg.domain.board.dto.BoardDto;
import com.shinhan.formyegg.domain.chat.dto.ChatDto;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class BoardRes {
    private long boardId;
    private long writer;
    private int affiliation;
    private String title;
    private String content;
    private int view;
    private LocalDateTime createdDate;
    private String image;

    public static BoardRes from(BoardDto boardDto) {
        return BoardRes.builder()
                .boardId(boardDto.getBoardId())
                .writer(boardDto.getWriter())
                .affiliation(boardDto.getAffiliation())
                .title(boardDto.getTitle())
                .content(boardDto.getContent())
                .view(boardDto.getView())
                .createdDate(boardDto.getCreateDate())
                .image(boardDto.getImage())
                .build();
    }
}