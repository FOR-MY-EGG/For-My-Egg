package com.shinhan.formyegg.api;

import org.springframework.http.ResponseEntity;

public interface ResponseService {
    CommonResponse getSuccessResponse();
    <T> SingleResponse<T> getSingleResponse(T data);
    CommonResponse getFailResponse(int code, String message);
}