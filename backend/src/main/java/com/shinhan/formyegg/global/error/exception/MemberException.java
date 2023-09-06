package com.shinhan.formyegg.global.error.exception;


import com.shinhan.formyegg.global.error.ErrorCode;

public class MemberException extends BusinessException{
    public MemberException(ErrorCode errorCode){
        super(errorCode);
    }
}