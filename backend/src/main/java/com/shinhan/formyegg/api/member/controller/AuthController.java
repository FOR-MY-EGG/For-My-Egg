package com.shinhan.formyegg.api.member.controller;

import com.mysql.cj.log.Log;
import com.shinhan.formyegg.api.member.dto.*;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.service.MemberService;
import com.shinhan.formyegg.global.util.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/auth")
@RequiredArgsConstructor
@RestController
public class AuthController {
    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping
    public ResponseEntity<LoginResponse> getMember(@RequestParam long id){
        System.out.println("in");
        MemberDto memberDto = memberService.login(id);
        String token = jwtTokenProvider.createToken(memberDto.getMemberId(), 1);
        LoginResponse loginResponse = LoginResponse.builder()
                .memberDto(memberDto)
                .token(token)
                .build();
        return ResponseEntity.status(HttpStatus.OK).body(loginResponse);
    }
}
