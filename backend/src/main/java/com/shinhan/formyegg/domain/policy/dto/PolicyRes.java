package com.shinhan.formyegg.domain.policy.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PolicyRes {
    private String name;
    private String intro;
}
