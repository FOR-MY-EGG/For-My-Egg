package com.shinhan.formyegg.api.memo.controller;

import com.shinhan.formyegg.api.memo.dto.MemoReqDto;
import com.shinhan.formyegg.api.memo.dto.MemoResDto;
import com.shinhan.formyegg.domain.board.entity.Board;
import com.shinhan.formyegg.domain.memo.dto.MemoDto;
import com.shinhan.formyegg.domain.memo.entity.Memo;
import com.shinhan.formyegg.domain.memo.repository.MemoRepository;
import com.shinhan.formyegg.domain.memo.service.MemoService;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.BusinessException;
import com.shinhan.formyegg.global.util.S3Uploader;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/memo")
@RequiredArgsConstructor
public class MemoController {
    private final MemoService memoService;

    @PostMapping
    public ResponseEntity<MemoResDto> createMemo(Authentication authentication, @RequestPart(name = "memo") MemoReqDto memoReqDto, @RequestPart(required = false) MultipartFile image) throws IOException {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Long memberId = Long.parseLong(userDetails.getUsername());
        MemoDto memoDto = memoService.createMemo(memberId, MemoDto.of(memoReqDto, image));
        return ResponseEntity.status(HttpStatus.OK).body(MemoResDto.from(memoDto));
    }

    @GetMapping("/{childId}")
    public ResponseEntity<List<MemoResDto>> getMemoListByMonth(@PathVariable Long childId, @RequestParam int month, @RequestParam int year){
        List<MemoDto> memoListByMonth = memoService.getMemoListByMonth(1L, childId, year, month);
        List<MemoResDto> memos = memoListByMonth.stream().map(MemoResDto::from).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(memos);
    }

    @GetMapping("/{childId}/today")
    public ResponseEntity<MemoResDto> getMemoWhenToday(@PathVariable Long childId, @RequestParam String date){
        StringTokenizer st = new StringTokenizer(date, "-");
        Optional<MemoDto> memoWhenToday = memoService.getMemoWhenToday(1L, childId, Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()));
        return ResponseEntity.status(HttpStatus.OK).body(MemoResDto.from(memoWhenToday.get()));
    }
}
