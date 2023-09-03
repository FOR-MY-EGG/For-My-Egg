package com.shinhan.formyegg.domain.policy.entity;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name="finance_product")
@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Policy {
    @Id
    @Column(name = "policy_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(name = "name", nullable=false, length=64)
    private String name;

    @Column(name = "intro", nullable=false, length=128)
    private String intro;

    @Column(name = "target_start", nullable=false)
    private int targetStart;

    @Column(name = "target_end", nullable=false)
    private int targetEnd;

    @Column(name = "target_area", nullable=false, length=64)
    private String targetArea;

    @Column(name = "child_cnt", nullable=false)
    private int childCnt;

}
