package com.shinhan.formyegg.api.member.controller;

import com.shinhan.formyegg.api.member.dto.*;
import com.shinhan.formyegg.domain.child.dto.ChildDto;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.service.MemberService;
import com.shinhan.formyegg.global.util.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequestMapping("/api/member")
@RequiredArgsConstructor
@RestController
public class MemberController {
    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping
    public ResponseEntity<LoginResponse> kakaoLogin(@RequestBody MemberRequest member){
        MemberDto memberDto = memberService.login(MemberDto.from(member));
        String token = jwtTokenProvider.createToken(memberDto.getMemberId(), 1);
        return ResponseEntity.status(HttpStatus.OK).body(LoginResponse.of(memberDto, token));
    }

    @GetMapping("/{memberId}")
    public ResponseEntity<MemberResponse> getMember(@PathVariable Long memberId){
        MemberDto memberDto = memberService.getMemberByMemberId(memberId);
        return ResponseEntity.status(HttpStatus.OK).body(MemberResponse.from(memberDto));

    }

    @GetMapping("/all/{memberId}")
    public ResponseEntity<MemberMainRes> getMemberChildren(@PathVariable Long memberId){
        MemberDto memberDto = memberService.getMemberByMemberId(memberId);
        List<ChildDto> childDtoList = memberService.getMemberWithChildren(memberId);
        return ResponseEntity.status(HttpStatus.OK).body(MemberMainRes.from(memberDto, childDtoList));

    }

    @PatchMapping("/nickname")
    public ResponseEntity<MemberResponse> modifyNickname(@RequestBody MemberNicknameRequest member){
        MemberDto memberDto = memberService.updateNickname(MemberDto.from(member));
        return ResponseEntity.status(HttpStatus.OK).body(MemberResponse.from(memberDto));
    }

}
