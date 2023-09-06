package com.shinhan.formyegg.global.error.exception;


import com.shinhan.formyegg.global.error.ErrorCode;

public class AccountException extends BusinessException{
    public AccountException(ErrorCode errorCode){
        super(errorCode);
    }
}