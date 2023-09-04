package com.shinhan.formyegg.api.health.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class HealthResponseDto {
    private String health;
    private List<String> activeProfiles;
}