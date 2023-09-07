package com.shinhan.formyegg.domain.comment.dto;

import com.shinhan.formyegg.domain.BaseTimeEntity;
import com.shinhan.formyegg.domain.board.entity.Board;
import com.shinhan.formyegg.domain.comment.entity.Comment;
import com.shinhan.formyegg.domain.member.entity.Member;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
public class CommentDto {
    private long commentId;
    private long boardId;
    private long memberId;
    private String content;
    private LocalDateTime createDate;

    private String nickname;
}
