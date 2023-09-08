package com.shinhan.formyegg.api.board.dto;

import com.shinhan.formyegg.domain.board.dto.BoardDto;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class BoardListRes {
    private long boardId;
    private long writer;
    private String title;
    private int view;
    private LocalDateTime createdDate;

    public static BoardListRes from(BoardDto boardDto) {
        return BoardListRes.builder()
                .boardId(boardDto.getBoardId())
                .writer(boardDto.getWriter())
                .title(boardDto.getTitle())
                .view(boardDto.getView())
                .createdDate(boardDto.getCreateDate())
                .build();
    }
}