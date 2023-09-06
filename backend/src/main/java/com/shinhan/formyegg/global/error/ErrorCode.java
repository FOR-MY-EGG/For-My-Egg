package com.shinhan.formyegg.global.error;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public enum ErrorCode {
	// TEST(HttpStatus.INTERNAL_SERVER_ERROR, "001", "businessExceptionTest")

	// 회원
	NOT_EXIST_MEMBER(HttpStatus.NOT_FOUND, "M-001", "존재하지 않는 회원입니다."),
	NOT_EXIST_BOARD(HttpStatus.NOT_FOUND, "M-002", "존재하지 않는 게시글입니다.")
	;

	ErrorCode(HttpStatus httpStatus, String errorCode, String message) {
		this.httpStatus = httpStatus;
		this.errorCode = errorCode;
		this.message = message;
	}

	private HttpStatus httpStatus;
	private String errorCode;
	private String message;

}
