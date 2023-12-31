package com.shinhan.formyegg.global.error;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public enum ErrorCode {
	// TEST(HttpStatus.INTERNAL_SERVER_ERROR, "001", "businessExceptionTest")

	// 인증
	NON_VALID_TOKEN(HttpStatus.UNAUTHORIZED, "A-001", "잘못된 형식의 토큰입니다."),
	AUTHENTICATION_ENTRY_POINT(HttpStatus.BAD_REQUEST, "A-002", "잘못된 접근입니다."),
	// 회원
	NOT_EXIST_MEMBER(HttpStatus.BAD_REQUEST, "M-001", "존재하지 않는 회원입니다."),
	NOT_EXIST_DEVICE_TOKEN(HttpStatus.BAD_REQUEST, "M-002", "사용자의 기기토큰이 존재하지 않습니다."),

	// 아이/어린이
	NOT_EXIST_KID(HttpStatus.BAD_REQUEST, "K-001", "아이가 존재하지 않습니다."),

	// 그룹
	NOT_EXIST_GROUP(HttpStatus.BAD_REQUEST, "G-001", "그룹이 존재하지 않습니다."),
	ALREADY_EXIST_GROUP(HttpStatus.BAD_REQUEST, "G-002", "이미 그룹이 존재합니다."),

	// 계좌
	NOT_EXIST_ACCOUNT(HttpStatus.BAD_REQUEST, "C-001", "존재하지 않는 계좌입니다."),

	NOT_EXIST_DATE(HttpStatus.BAD_REQUEST, "D-001", "잘못된 날짜 형식입니다."),

	//정책
	NOT_EXIST_POLICY(HttpStatus.BAD_REQUEST, "P-001", "존재하지 않는 정책입니다."),

	//금융
	NOT_EXIST_FINANCE(HttpStatus.BAD_REQUEST, "F-001", "존재하지 않는 금융 상품입니다."),
	// 게시글
	NOT_EXIST_BOARD(HttpStatus.INTERNAL_SERVER_ERROR, "B-001", "존재하지 않는 게시글입니다."),
	NOT_EXIST_AFFILIATION(HttpStatus.INTERNAL_SERVER_ERROR, "B-001", "존재하지 않는 게시판 분류입니다."),
	// 메모
	ALREADY_EXIST_TODAY_MEMO(HttpStatus.BAD_REQUEST, "T-001", "해당 날짜의 메모는 이미 존재합니다."),
	NOT_EXIST_TODAY_MEMO(HttpStatus.BAD_REQUEST, "T-002", "해당 날짜의 메모가 존재하지 않습니다."),
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
