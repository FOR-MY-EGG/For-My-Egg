package com.shinhan.formyegg.api.child.controller;

import com.shinhan.formyegg.api.child.dto.ChildAccountRes;
import com.shinhan.formyegg.domain.child.dto.ChildDto;
import com.shinhan.formyegg.domain.child.service.ChildService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/child")
@RequiredArgsConstructor
@RestController
public class ChildController {

    private final ChildService childService;
    @GetMapping("/{childId}")
    public ResponseEntity<ChildAccountRes> getChildAccountBalance(@PathVariable Long childId){
        ChildDto child = childService.getChildByChildId(childId);
        return ResponseEntity.status(HttpStatus.OK).body(ChildAccountRes.from(child));

    }
}
