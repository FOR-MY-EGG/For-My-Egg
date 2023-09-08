package com.shinhan.formyegg.api.child.controller;

import com.shinhan.formyegg.api.child.dto.ChildAccountRes;
import com.shinhan.formyegg.api.child.dto.ChildCreateReq;
import com.shinhan.formyegg.domain.child.dto.ChildDto;
import com.shinhan.formyegg.domain.child.service.ChildService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/child")
@RequiredArgsConstructor
@RestController
public class ChildController {
    private final ChildService childService;

    @GetMapping("/{childId}")
    public ResponseEntity<ChildAccountRes> getChildAccountBalance(@PathVariable Long childId){
        ChildDto child = childService.getChildByChildId(childId);
        return ResponseEntity.status(HttpStatus.OK).body(ChildAccountRes.from(child));

    }

    @PostMapping("/{groupId}")
    public ResponseEntity<Void> createChildAndAccount(@PathVariable Long groupId, @RequestBody ChildCreateReq childCreateReq){
        childService.createChildAndAccount(groupId, childCreateReq);
        return ResponseEntity.ok().build();

    }
}
