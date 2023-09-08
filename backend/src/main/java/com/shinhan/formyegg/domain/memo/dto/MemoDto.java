package com.shinhan.formyegg.domain.memo.dto;

import com.shinhan.formyegg.api.memo.dto.MemoReqDto;
import com.shinhan.formyegg.domain.memo.entity.Memo;
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
    private String holder;
    private String image;
    public static MemoDto from(Memo memo){
        return MemoDto.builder()
                .memoId(memo.getMemoId())
                .groupId(memo.getGroupId().getFamilyId())
                .childId(memo.getChildId().getChildId())
                .amount(memo.getAmount())
                .title(memo.getTitle())
                .content(memo.getContent())
                .image(memo.getImage())
                .holder(memo.getHolder())
                .build();
    }
    public static MemoDto from(MemoReqDto memoReqDto){
        return MemoDto.builder()
                .childId(memoReqDto.getChildId())
                .amount(memoReqDto.getAmount())
                .title(memoReqDto.getTitle())
                .content(memoReqDto.getContent())
                .image(memoReqDto.getImage())
                .build();
    }
}
