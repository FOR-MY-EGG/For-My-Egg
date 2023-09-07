package com.shinhan.formyegg.api.comment.dto;


import com.shinhan.formyegg.domain.comment.entity.Comment;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class CommentRes {
    private long commentId;
    private String nickname;
    private String content;
    private LocalDateTime createDate;

    public static List<CommentRes> from(List<Comment> commentList) {
        List<CommentRes> res = new ArrayList<>();
        for(Comment comment : commentList) {
            res.add(
                    CommentRes.builder()
                    .nickname(comment.getMemberId().getNickname())
                    .content(comment.getContent())
                    .commentId(comment.getCommentId())
                    .createDate(comment.getCreateDate())
                    .build()
            );
        }
        return res;
    }

    public static CommentRes from(Comment comment) {
        return CommentRes.builder()
                .commentId(comment.getCommentId())
                .content(comment.getContent())
                .createDate(comment.getCreateDate())
                .nickname(comment.getMemberId().getNickname())
                .build();
    }
}
