package com.shinhan.formyegg.api.member.controller;

import com.shinhan.formyegg.api.member.dto.MemberNicknameRequest;
import com.shinhan.formyegg.api.member.dto.MemberProfileRequest;
import com.shinhan.formyegg.api.member.dto.MemberRequest;
import com.shinhan.formyegg.api.member.dto.MemberResponse;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/member")
@RequiredArgsConstructor
@RestController
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/{memberId}")
    public ResponseEntity<MemberResponse> getMember(@PathVariable Long memberId){
        MemberDto memberDto = memberService.getMemberByMemberId(memberId);
        return ResponseEntity.status(HttpStatus.OK).body(MemberResponse.from(memberDto));

    }

    @PostMapping
    public ResponseEntity<MemberResponse> createMember(@RequestBody MemberRequest member){
        MemberDto memberDto = memberService.createMember(MemberDto.from(member));
        return ResponseEntity.status(HttpStatus.OK).body(MemberResponse.from(memberDto));
    }

    @PatchMapping("/nickname")
    public ResponseEntity<MemberResponse> modifyNickname(@RequestBody MemberNicknameRequest member){
        MemberDto memberDto = memberService.updateNickname(MemberDto.from(member));
        return ResponseEntity.status(HttpStatus.OK).body(MemberResponse.from(memberDto));
    }

    @PatchMapping("/profile")
    public ResponseEntity<MemberResponse> modifyProfile(@RequestBody MemberProfileRequest member){
        MemberDto memberDto = memberService.updateProfile(MemberDto.from(member));
        return ResponseEntity.status(HttpStatus.OK).body(MemberResponse.from(memberDto));
    }
}
