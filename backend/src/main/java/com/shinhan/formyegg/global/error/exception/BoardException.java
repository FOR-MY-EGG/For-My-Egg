package com.shinhan.formyegg.global.error.exception;


import com.shinhan.formyegg.global.error.ErrorCode;

public class BoardException extends BusinessException{
    public BoardException(ErrorCode errorCode){
        super(errorCode);
    }
}