package com.shinhan.formyegg.api.finance.dto;

import com.shinhan.formyegg.api.finance.dto.FinanceRes;
import com.shinhan.formyegg.domain.financeproduct.entity.FinanceProduct;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FinanceRes {
    private String name;
    private String intro;
    private int type;
    private String link;
    private String targetIntro;
    public static FinanceRes from(FinanceProduct finance){
        return FinanceRes.builder()
                .name(finance.getName())
                .type(finance.getType())
                .link(finance.getLink())
                .intro(finance.getIntro())
                .targetIntro(finance.getTargetIntro())
                .build();
    }
}
