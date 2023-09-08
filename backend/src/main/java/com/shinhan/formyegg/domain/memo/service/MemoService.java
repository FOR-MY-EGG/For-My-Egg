package com.shinhan.formyegg.domain.memo.service;

import com.shinhan.formyegg.domain.memo.dto.MemoDto;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface MemoService {
    List<MemoDto> getMemoListByMonth(String month);
    Optional<MemoDto> getMemoWhenToday();
}
