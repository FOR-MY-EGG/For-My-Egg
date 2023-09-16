package com.shinhan.formyegg.api.group.controller;

import com.shinhan.formyegg.api.group.dto.GroupCreateReqDto;
import com.shinhan.formyegg.api.group.dto.GroupCreateResDto;
import com.shinhan.formyegg.domain.group.dto.GroupDto;
import com.shinhan.formyegg.domain.group.service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/group")
@RequiredArgsConstructor
public class GroupController {
    private final GroupService groupService;
    @PostMapping
    public ResponseEntity<GroupCreateResDto> createGroup(Authentication authentication){
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Long memberId = Long.parseLong(userDetails.getUsername());
        GroupDto group = groupService.createGroup(memberId);
        return ResponseEntity.status(HttpStatus.OK).body(GroupCreateResDto.from(group));
    }

    @PostMapping("/invitation")
    public ResponseEntity<GroupCreateResDto> gatherGroup(Authentication authentication, @RequestBody GroupCreateReqDto groupCreateReqDto){
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Long memberId = Long.parseLong(userDetails.getUsername());
        GroupDto group = groupService.invitateGroup(memberId, GroupDto.from(groupCreateReqDto));
        return ResponseEntity.status(HttpStatus.OK).body(GroupCreateResDto.from(group));
    }

    @GetMapping("/group-code")
    public ResponseEntity<String> getGroupCode(Authentication authentication){
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Long memberId = Long.parseLong(userDetails.getUsername());
        String groupCode = groupService.getGroupCode(memberId);
        return  ResponseEntity.status(HttpStatus.OK).body(groupCode);
    }
}
