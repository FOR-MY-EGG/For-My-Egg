package com.shinhan.formyegg.domain.memo.service;

import com.shinhan.formyegg.domain.memo.dto.MemoDto;
import com.shinhan.formyegg.domain.memo.repository.MemoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemoServiceImpl implements MemoService{
    private MemoRepository memoRepository;

    @Override
    public List<MemoDto> getMemoListByMonth(String month) {
        return null;
    }

    @Override
    public Optional<MemoDto> getMemoWhenToday() {
        return Optional.empty();
    }
}
