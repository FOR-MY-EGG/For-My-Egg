package com.shinhan.formyegg.domain.policy.entity;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name="policy")
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

    @Column(name = "intro", nullable=false, length=2048)
    private String intro;

    @Column(name = "is_multi", nullable=false)
    private boolean isMulti;

    @Column(name="target_intro", nullable=false, length=2048)
    private String targetIntro;

    @Column(name="apply_center", nullable=false, length=64)
    private String applyCenter;

    @Column(name="type", nullable=false)
    private int type;
}
