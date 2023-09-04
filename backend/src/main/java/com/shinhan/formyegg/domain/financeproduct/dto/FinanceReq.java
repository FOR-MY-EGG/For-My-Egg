package com.shinhan.formyegg.domain.financeproduct.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FinanceReq {
    private int targetStart;
    private int targetEnd;
}
