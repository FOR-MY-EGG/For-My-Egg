package com.shinhan.formyegg.global.error;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public enum ErrorCode {
	// TEST(HttpStatus.INTERNAL_SERVER_ERROR, "001", "businessExceptionTest")

	// 회원
	NOT_EXIST_MEMBER(HttpStatus.BAD_REQUEST, "M-001", "존재하지 않는 회원입니다."),

	// 아이/어린이
	NOT_EXIST_KID(HttpStatus.BAD_REQUEST, "K-001", "아이가 존재하지 않습니다."),

	// 그룹
	NOT_EXIST_GROUP(HttpStatus.BAD_REQUEST, "G-001", "그룹이 존재하지 않습니다."),

	// 계좌
	NOT_EXIST_ACCOUNT(HttpStatus.BAD_REQUEST, "C-001", "존재하지 않는 계좌입니다."),
	
	// 게시글
	NOT_EXIST_BOARD(HttpStatus.BAD_REQUEST, "B-001", "존재하지 않는 계좌입니다.")
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
