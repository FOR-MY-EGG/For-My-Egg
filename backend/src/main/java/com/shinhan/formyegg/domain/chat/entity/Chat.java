package com.shinhan.formyegg.domain.chat.entity;

import com.shinhan.formyegg.api.board.dto.BoardDetailRes;
import com.shinhan.formyegg.api.chat.dto.ChatRes;
import com.shinhan.formyegg.domain.BaseTimeEntity;
import com.shinhan.formyegg.domain.chat.dto.ChatDto;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.entity.Member;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@NamedNativeQueries(
        @NamedNativeQuery(
                name = "findChatsByAffiliation",
                query = "SELECT c.chat_id as chatId, m.nickname as nickname, c.member_id as writer, c.type as type, c.content as content, c.create_date as createdDate " +
                        "FROM Chat c JOIN Member m ON c.member_id = m.member_id " +
                        "WHERE c.affiliation=:affiliation " +
                        "ORDER BY createdDate",
                resultSetMapping = "findChatsByAffiliation"
        )
)
@SqlResultSetMapping(
        name = "findChatsByAffiliation",
        classes = @ConstructorResult(
                targetClass = ChatRes.class,
                columns = {
                        @ColumnResult(name = "chatId", type = Long.class),
                        @ColumnResult(name = "nickname", type = String.class),
                        @ColumnResult(name = "writer", type = Long.class),
                        @ColumnResult(name = "type", type = int.class),
                        @ColumnResult(name = "content", type = String.class),
                        @ColumnResult(name = "createdDate", type = LocalDateTime.class),
                }
        )
)
public class Chat extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long chatId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="member_id")
    private Member writer;

    @Column(nullable = false)
    @ColumnDefault("0")
    private int affiliation;

    @Column(nullable = false)
    @ColumnDefault("0")
    private int type;

    private String content;

    public static Chat from(ChatDto chatDto, Member member){
        return Chat.builder()
                .writer(member)
                .affiliation(chatDto.getAffiliation())
                .type(chatDto.getType())
                .content(chatDto.getContent())
                .build();
    }
}
