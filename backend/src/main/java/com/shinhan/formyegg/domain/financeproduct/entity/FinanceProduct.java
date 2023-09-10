package com.shinhan.formyegg.domain.financeproduct.entity;


import lombok.*;

import javax.persistence.*;


@Entity
@Table(name="finance_product")
@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class FinanceProduct {
    @Id
    @Column(name = "product_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(name = "name", nullable=false, length=45)
    private String name;

    @Column(name = "intro", nullable=false, length=128)
    private String intro;

    @Column(name = "type", nullable=false)
    private int type;

    @Column(name= "link", nullable=false, length=2048)
    private String link;

    @Column(name= "target_intro", nullable=false, length=2048)
    private String targetIntro;

}
