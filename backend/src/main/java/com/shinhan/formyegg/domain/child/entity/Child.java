package com.shinhan.formyegg.domain.child.entity;

import com.shinhan.formyegg.domain.account.entity.Account;
import com.shinhan.formyegg.domain.group.entity.Group;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
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

}
