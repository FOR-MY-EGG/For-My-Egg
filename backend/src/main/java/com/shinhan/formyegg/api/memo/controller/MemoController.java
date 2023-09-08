package com.shinhan.formyegg.api.memo.controller;

import com.shinhan.formyegg.api.memo.dto.MemoReqDto;
import com.shinhan.formyegg.api.memo.dto.MemoResDto;
import com.shinhan.formyegg.domain.memo.dto.MemoDto;
import com.shinhan.formyegg.domain.memo.service.MemoService;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.BusinessException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.StringTokenizer;

@RestController
@RequestMapping("/api/memo")
@RequiredArgsConstructor
public class MemoController {
    private final MemoService memoService;

    @PostMapping
    public ResponseEntity<MemoResDto> createMemo(@RequestBody MemoReqDto memoReqDto){
        MemoDto memoDto = memoService.createMemo(1L, MemoDto.from(memoReqDto));
        return ResponseEntity.status(HttpStatus.OK).body(MemoResDto.from(memoDto));
    }

    @GetMapping("/{childId}")
    public ResponseEntity<List<MemoResDto>> getMemoListByMonth(@PathVariable Long childId, @RequestParam int month, @RequestParam int year){
        List<MemoDto> memoListByMonth = memoService.getMemoListByMonth(1L, childId, year, month);
        List<MemoResDto> memos = memoListByMonth.stream().map(MemoResDto::from).toList();
        return ResponseEntity.status(HttpStatus.OK).body(memos);
    }

    @GetMapping("/{childId}")
    public ResponseEntity<MemoResDto> getMemoWhenToday(@PathVariable Long childId, @RequestParam String date){
        StringTokenizer st = new StringTokenizer(date, "-");
        Optional<MemoDto> memoWhenToday = memoService.getMemoWhenToday(1L, childId, Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()));
        return ResponseEntity.status(HttpStatus.OK).body(MemoResDto.from(memoWhenToday.get()));
    }
}
