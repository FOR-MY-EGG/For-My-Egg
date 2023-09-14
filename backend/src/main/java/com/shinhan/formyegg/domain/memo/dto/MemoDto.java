package com.shinhan.formyegg.domain.memo.dto;

import com.shinhan.formyegg.api.memo.dto.MemoReqDto;
import com.shinhan.formyegg.domain.memo.entity.Memo;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

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
    private MultipartFile imageFile;
    private LocalDate createDate;

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
                .createDate(memo.getCreateDate())
                .build();
    }
    public static MemoDto of(MemoReqDto memoReqDto, MultipartFile image){
        return MemoDto.builder()
                .childId(memoReqDto.getChildId())
                .amount(memoReqDto.getAmount())
                .title(memoReqDto.getTitle())
                .holder(memoReqDto.getSender())
                .content(memoReqDto.getContent())
                .imageFile(image)
                .build();
    }
}
