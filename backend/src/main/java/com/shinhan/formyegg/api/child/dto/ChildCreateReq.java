package com.shinhan.formyegg.api.child.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ChildCreateReq {
    private String name;
    private LocalDateTime birth_date;
    private String nickname;
    private String number;
}
