package com.shinhan.formyegg.global.error.exception;


import com.shinhan.formyegg.global.error.ErrorCode;

public class MemoException extends BusinessException{
    public MemoException(ErrorCode errorCode){
        super(errorCode);
    }
}