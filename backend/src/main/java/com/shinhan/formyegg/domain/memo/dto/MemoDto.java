package com.shinhan.formyegg.domain.memo.dto;

import lombok.Builder;
import lombok.Getter;
@Getter
@Builder
public class MemoDto {
    private Long memoId;
    private Long groupId;
    private Long childId;
    private int amount;
    private String title;
    private String content;
    private String image;
}
