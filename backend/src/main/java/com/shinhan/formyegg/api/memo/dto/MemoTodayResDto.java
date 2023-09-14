package com.shinhan.formyegg.api.memo.dto;

import com.shinhan.formyegg.domain.memo.dto.MemoDto;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Getter
@Builder
public class MemoTodayResDto {
    private String title;
    private String content;
    private String image;
    private LocalDate createDate;

    public static MemoTodayResDto from(MemoDto memoDto){
        return MemoTodayResDto.builder()
                .title(memoDto.getTitle())
                .content(memoDto.getContent())
                .image(memoDto.getImage())
                .createDate(memoDto.getCreateDate())
                .build();
    }

}
