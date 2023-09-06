package com.shinhan.formyegg.api.board.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class BoardCreateReq {
    private long writer;
    private int affiliation;
    private String title;
    private String content;
}