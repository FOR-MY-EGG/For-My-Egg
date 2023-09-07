package com.shinhan.formyegg.api.comment.dto;


import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class CommentRes {
    private long commentId;
    private String nickname;
    private String content;
    private LocalDateTime createDate;
}
