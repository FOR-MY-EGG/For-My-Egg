package com.shinhan.formyegg.api.finance.controller;


import com.shinhan.formyegg.api.finance.dto.FinanceRes;
import com.shinhan.formyegg.domain.financeproduct.service.FinanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/finance")
@RequiredArgsConstructor
@RestController
public class FinanceController {
    private final FinanceService financeService;

    @GetMapping("type/{type}")
    public ResponseEntity<List<FinanceRes>> getFinanceProductByType(@PathVariable int type){
        List<FinanceRes> financeResList = financeService.getFinanceProductsByType(type);
        return ResponseEntity.status(HttpStatus.OK).body(financeResList);
    }
}
