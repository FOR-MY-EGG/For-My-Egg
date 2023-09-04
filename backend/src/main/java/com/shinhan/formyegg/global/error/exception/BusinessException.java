package com.shinhan.formyegg.global.error.exception;

import com.shinhan.formyegg.global.error.ErrorCode;

public class BusinessException extends RuntimeException{
	private ErrorCode errorCode;

	public BusinessException(ErrorCode errorCode){
		super(errorCode.getMessage());
		this.errorCode = errorCode;
	}
}
