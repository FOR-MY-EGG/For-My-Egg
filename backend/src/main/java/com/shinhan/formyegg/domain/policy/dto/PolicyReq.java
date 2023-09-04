package com.shinhan.formyegg.domain.policy.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PolicyReq {
    private String targetArea;
    private int childCnt;
    private int targetStart;
    private int targetEnd;
}
