package com.shinhan.formyegg.api;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommonResponse {
    private int code;
    private String message;
}
