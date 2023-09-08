package com.shinhan.formyegg.domain.account.entity;

import com.shinhan.formyegg.api.child.dto.ChildCreateReq;
import com.shinhan.formyegg.domain.account.dto.AccountDto;
import com.shinhan.formyegg.domain.child.entity.Child;
import lombok.*;

import javax.persistence.*;

import com.shinhan.formyegg.domain.member.entity.Member;

@Entity(name = "account")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id", updatable = false)
    private Long accountId;

    @Column(name = "nickname", nullable = false, length = 45)
    private String nickname;

    @Column(name = "number", nullable = false, length = 45, unique = true)
    private String number;

    @Column(name = "balance", nullable = false)
    private Long balance;

    public void updateNickname(String nickname) {
        this.nickname = nickname;
    }

    public static Account from(ChildCreateReq childCreateReq) {
        return Account.builder()
                .balance(0L)
                .nickname(childCreateReq.getNickname())
                .number(childCreateReq.getNumber())
                .build();
    }
}
