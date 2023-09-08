package com.shinhan.formyegg.api.comment.dto;


import com.shinhan.formyegg.domain.comment.entity.Comment;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class CommentReq {
    private long memberId;
    private String content;
}
