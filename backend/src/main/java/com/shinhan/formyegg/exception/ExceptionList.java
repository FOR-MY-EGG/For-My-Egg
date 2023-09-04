package com.shinhan.formyegg.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum ExceptionList {
    UNKNOWN(500, "알 수 없는 오류가 발생하였습니다."),
    MEMBER_NOT_FOUND(500, "해당 멤버가 존재하지 않습니다.");

    private final int code;
    private final String message;
}