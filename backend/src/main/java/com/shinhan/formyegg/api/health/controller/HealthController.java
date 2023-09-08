package com.shinhan.formyegg.api.health.controller;

import com.shinhan.formyegg.api.health.dto.HealthResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/health")
public class HealthController {
    private final Environment environment;

    @GetMapping
    public ResponseEntity<HealthResponseDto> healthCheck(){
        HealthResponseDto healthResponseDto = HealthResponseDto.of("ok", Arrays.asList(environment.getActiveProfiles()));
        return ResponseEntity.ok(healthResponseDto);
    }
}
