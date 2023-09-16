package com.shinhan.formyegg.api.memo.dto;

import com.shinhan.formyegg.domain.memo.dto.MemoDto;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Builder
public class MemoResDto {
    private Long memoId;
    private LocalDate day;
    private String holder;
    private int amount;

    public static MemoResDto from(MemoDto memoDto){
        return MemoResDto.builder()
                .memoId(memoDto.getMemoId())
                .day(memoDto.getCreateDate())
                .holder(memoDto.getHolder())
                .amount(memoDto.getAmount())
                .build();
    }
}
