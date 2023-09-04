package com.shinhan.formyegg.api;

import lombok.*;

@Setter
@Getter
public class SingleResponse<T> extends CommonResponse{
    private T data;
}
