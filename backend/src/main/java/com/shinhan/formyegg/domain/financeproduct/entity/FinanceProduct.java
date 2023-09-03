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
    private int productId;

    @Column(name = "product_name", nullable=false)
    private String productName;

    @Column(name = "product_intro", nullable=false)
    private String productIntro;

    @Column(name = "target_start", nullable=false)
    private int targetStart;

    @Column(name = "target_end", nullable=false)
    private int targetEnd;

    @Column(name = "product_type", nullable=false)
    private String productType;

}
