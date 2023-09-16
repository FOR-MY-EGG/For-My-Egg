package com.shinhan.formyegg.domain.child.entity;

import com.shinhan.formyegg.api.child.dto.ChildCreateReq;
import com.shinhan.formyegg.domain.account.entity.Account;
import com.shinhan.formyegg.domain.group.entity.Group;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class Child {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "child_id", updatable = false)
    private Long childId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Group groupId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Account accountId;

    @Column(name = "name", nullable = false, length = 20)
    private String name;

    @Column(name = "birth_date", nullable = false)
    private LocalDateTime birthDate;

    public static Child from(ChildCreateReq childCreateReq, Group group, Account account, int year, int month, int date) {
        return Child.builder()
                .accountId(account)
                .groupId(group)
                .name(childCreateReq.getName())
                .birthDate(LocalDateTime.of(LocalDate.of(year, month, date), LocalTime.MIN))
                .build();
    }
    public static Child from(Long childId){
        return Child.builder().childId(childId).build();
    }
}
