package com.shinhan.formyegg.domain.board.entity;

import com.shinhan.formyegg.api.board.dto.BoardDetailRes;
import com.shinhan.formyegg.domain.BaseTimeEntity;
import com.shinhan.formyegg.domain.board.dto.BoardDto;
import com.shinhan.formyegg.domain.member.entity.Member;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@NamedNativeQueries(
        @NamedNativeQuery(
                name = "findBoardsAndNickname",
                query = "select b.board_id as boardId, m.nickname as nickname, b.title as title, b.content as content, b.view as view, b.create_date as createDate, b.image as image " +
                        "from Board as b join Member as m on b.member_id = m.member_id " +
                        "where b.affiliation = :affiliation order by b.create_date",
                resultSetMapping = "findBoardsAndNickname"
        )
)
@SqlResultSetMapping(
        name = "findBoardsAndNickname",
        classes = @ConstructorResult(
                targetClass = BoardDetailRes.class,
                columns = {
                        @ColumnResult(name = "boardId", type = Long.class),
                        @ColumnResult(name = "nickname", type = String.class),
                        @ColumnResult(name = "title", type = String.class),
                        @ColumnResult(name = "content", type = String.class),
                        @ColumnResult(name = "view", type = Integer.class),
                        @ColumnResult(name = "createDate", type = LocalDateTime.class),
                        @ColumnResult(name = "image", type = String.class)
                }
        )
)
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="member_id")
    private Member writer;

    private int affiliation;

    @Column(nullable = false, length = 64)
    private String title;

    @Column(nullable = false, length = 512)
    private String content;

    @Column(nullable = false)
    @ColumnDefault("0")
    private int view;

    private String image;

    public static Board from(BoardDto boardDto, Member member, String image) {
        return Board.builder()
                .writer(member)
                .affiliation(boardDto.getAffiliation())
                .title(boardDto.getTitle())
                .content(boardDto.getContent())
                .view(0)
                .image(image)
                .build();
    }
}
