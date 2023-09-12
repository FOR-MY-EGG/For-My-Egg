package com.shinhan.formyegg.api.policy.dto;

import com.shinhan.formyegg.domain.policy.entity.Policy;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PolicyRes {
    private String name;
    private String intro;
    private String targetIntro;
    private String applyCenter;
    private int type;

    public static PolicyRes from(Policy policy){
        return PolicyRes.builder()
                .name(policy.getName())
                .intro(policy.getIntro())
                .targetIntro(policy.getTargetIntro())
                .applyCenter(policy.getApplyCenter())
                .type(policy.getType())
                .build();
    }
}
