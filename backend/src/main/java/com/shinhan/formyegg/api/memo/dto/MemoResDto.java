package com.shinhan.formyegg.api.memo.dto;

import com.shinhan.formyegg.domain.memo.dto.MemoDto;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemoResDto {
    private Long childId;
    private int amount;
    private String title;
    private String content;
    private String image;
    private String holder;

    public static MemoResDto from(MemoDto memoDto){
        return MemoResDto.builder()
                .amount(memoDto.getAmount())
                .childId(memoDto.getChildId())
                .title(memoDto.getTitle())
                .content(memoDto.getContent())
                .image(memoDto.getImage())
                .holder(memoDto.getHolder())
                .build();
    }
}
