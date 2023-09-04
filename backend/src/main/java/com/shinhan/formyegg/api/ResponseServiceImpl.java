package com.shinhan.formyegg.api;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ResponseServiceImpl implements ResponseService{

    public CommonResponse getSuccessResponse() {
        CommonResponse result = new CommonResponse();
        result.setCode(HttpStatus.OK.value());
        return result;
    }

    public <T> SingleResponse<T> getSingleResponse(T data) {
        SingleResponse<T> result = new SingleResponse<T>();
        result.setCode(HttpStatus.OK.value());
        result.setData(data);
        return result;
    }

    public CommonResponse getFailResponse(int code, String message) {
        CommonResponse result = new CommonResponse();
        result.setCode(code);
        result.setMessage(message);
        return result;
    }
}