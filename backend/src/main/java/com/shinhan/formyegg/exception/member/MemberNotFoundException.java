package com.shinhan.formyegg.exception.member;

public class MemberNotFoundException extends RuntimeException{
    public MemberNotFoundException(){
        super();
    }

    public MemberNotFoundException(String message){
        super(message);
    }

    public MemberNotFoundException(String message, Throwable th){
        super(message, th);
    }
}