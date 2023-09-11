package com.shinhan.formyegg.api.board.dto;

import com.shinhan.formyegg.api.comment.dto.CommentRes;
import com.shinhan.formyegg.domain.board.dto.BoardDto;
import com.shinhan.formyegg.domain.comment.dto.CommentDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoardDetailRes {
    private long boardId;
    private String nickname;
    private String title;
    private String content;
    private int view;
    private LocalDateTime createdDate;
    private String image;
}