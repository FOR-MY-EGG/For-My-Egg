package com.shinhan.formyegg.exception;

import com.shinhan.formyegg.api.CommonResponse;
import com.shinhan.formyegg.api.ResponseService;
import com.shinhan.formyegg.exception.member.MemberNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RequiredArgsConstructor
@RestControllerAdvice
public class ExceptionAdvice {
    private final ResponseService responseService;

    @ExceptionHandler(MemberNotFoundException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    protected ResponseEntity<CommonResponse> memberNotFoundException() {
        log.error("멤버가 없네!!");
        return ResponseEntity.internalServerError().body(responseService.getFailResponse(ExceptionList.MEMBER_NOT_FOUND.getCode(), ExceptionList.MEMBER_NOT_FOUND.getMessage()));
    }

    // 제일 아래에 있었으면 합니다 - 민태 -
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    protected ResponseEntity<CommonResponse> unknown(Exception e) {
        log.error("unknown exception {}", e.getMessage());
        return ResponseEntity.internalServerError().body(responseService.getFailResponse(ExceptionList.UNKNOWN.getCode(), ExceptionList.UNKNOWN.getMessage()));
    }


}