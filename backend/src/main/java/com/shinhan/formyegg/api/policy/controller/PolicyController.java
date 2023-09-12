package com.shinhan.formyegg.api.policy.controller;

import com.shinhan.formyegg.api.policy.dto.PolicyRes;
import com.shinhan.formyegg.domain.policy.service.PolicyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/policy")
@RequiredArgsConstructor
@RestController
public class PolicyController {
    private final PolicyService policyService;

    @GetMapping ("/type/{type}")
    public ResponseEntity<List<PolicyRes>> getPolicyByType(@PathVariable int type){
        List<PolicyRes> policyResList = policyService.getPolicyByType(type);
        return ResponseEntity.status(HttpStatus.OK).body(policyResList);
    }

    @GetMapping("/multi")
    public ResponseEntity<List<PolicyRes>> getPolicyByIsMulti(){
        List<PolicyRes> policyResList = policyService.getPolicyByIsMulti();
        return ResponseEntity.status(HttpStatus.OK).body(policyResList);
    }
}
