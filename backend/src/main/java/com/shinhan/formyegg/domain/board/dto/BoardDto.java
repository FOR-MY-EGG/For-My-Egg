package com.shinhan.formyegg.domain.board.dto;

import com.shinhan.formyegg.api.board.dto.BoardCreateReq;
import com.shinhan.formyegg.domain.board.entity.Board;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Getter
@Builder
public class BoardDto {
    private Long boardId;
    private long writer;
    private int affiliation;
    private String title;
    private String content;
    private int view;
    private String image;
    private LocalDateTime createDate;
    private MultipartFile imageFile;

    public static BoardDto from(BoardCreateReq boardReq, MultipartFile image){
        return BoardDto.builder()
                .writer(boardReq.getWriter())
                .affiliation(boardReq.getAffiliation())
                .title(boardReq.getTitle())
                .content(boardReq.getContent())
                .imageFile(image)
                .build();
    }

    public static BoardDto from(Board board){
        return BoardDto.builder()
                .boardId(board.getBoardId())
                .writer(board.getWriter().getMemberId())
                .affiliation(board.getAffiliation())
                .title(board.getTitle())
                .content(board.getContent())
                .view(board.getView())
                .image(board.getImage())
                .createDate(board.getCreateDate())
                .build();
    }
}
