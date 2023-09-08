package com.shinhan.formyegg.global.error.exception;


import com.shinhan.formyegg.global.error.ErrorCode;

public class GroupException extends BusinessException{
    public GroupException(ErrorCode errorCode){
        super(errorCode);
    }
}