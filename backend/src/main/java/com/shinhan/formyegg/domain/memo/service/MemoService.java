package com.shinhan.formyegg.domain.memo.service;

import com.shinhan.formyegg.api.memo.dto.MemoReqDto;
import com.shinhan.formyegg.api.memo.dto.MemoResDto;
import com.shinhan.formyegg.domain.memo.dto.MemoDto;

import javax.swing.text.html.Option;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface MemoService {
    MemoDto createMemo(Long memberId, MemoDto memoDto) throws IOException;
    List<MemoDto> getMemoListByMonth(Long memberId, Long childId, int year, int month);
    Optional<MemoDto> getMemoWhenToday(Long memberId, Long childId, int year, int month, int day);
}
