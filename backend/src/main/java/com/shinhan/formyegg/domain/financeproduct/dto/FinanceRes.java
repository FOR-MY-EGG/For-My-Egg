package com.shinhan.formyegg.domain.financeproduct.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FinanceRes {
    private String name;
    private String intro;
    private String type;
}
