package com.shinhan.formyegg.api.health.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class HealthResponseDto {
    private String health;
    private List<String> activeProfiles;

    public static HealthResponseDto of(String health, List<String> activeProfiles){
        return  HealthResponseDto.builder()
                .health(health)
                .activeProfiles(activeProfiles)
                .build();
    }
}