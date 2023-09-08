package com.shinhan.formyegg.global.error.exception;


import com.shinhan.formyegg.global.error.ErrorCode;

public class AffiliationException extends BusinessException{
    public AffiliationException(ErrorCode errorCode){
        super(errorCode);
    }
}