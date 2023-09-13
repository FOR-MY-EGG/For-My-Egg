package com.shinhan.formyegg.api.memo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemoReqDto {
    private Long childId;
    private String sender;
    private int amount;
    private String title;
    private String content;
    private String image;
}
