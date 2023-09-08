package com.shinhan.formyegg.global.error.exception;


import com.shinhan.formyegg.global.error.ErrorCode;

public class NonValidJwtTokenException extends BusinessException{
    public NonValidJwtTokenException(ErrorCode errorCode){
        super(errorCode);
    }
}