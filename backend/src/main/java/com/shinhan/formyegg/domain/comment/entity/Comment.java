package com.shinhan.formyegg.domain.comment.entity;

import com.shinhan.formyegg.api.comment.dto.CommentReq;
import com.shinhan.formyegg.domain.BaseTimeEntity;
import com.shinhan.formyegg.domain.board.entity.Board;
import com.shinhan.formyegg.domain.member.entity.Member;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Comment extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="board_id")
    private Board boardId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="member_id")
    private Member memberId;

    private String content;

    public static Comment from(CommentReq commentReq, Member member, Board board) {
        return Comment.builder()
                .boardId(board)
                .memberId(member)
                .content(commentReq.getContent())
                .build();
    }
}
