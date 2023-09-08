package com.shinhan.formyegg.global.error.exception;

public class CAuthenticationEntryPointException extends RuntimeException{
    public CAuthenticationEntryPointException(){
        super();
    }

    public CAuthenticationEntryPointException(String message){
        super(message);
    }

    public CAuthenticationEntryPointException(String message, Throwable th){
        super(message, th);
    }
}