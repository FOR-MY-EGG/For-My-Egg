package com.shinhan.formyegg.domain.board.service;

import com.shinhan.formyegg.domain.board.dto.BoardDto;
import com.shinhan.formyegg.domain.chat.dto.ChatDto;
import com.shinhan.formyegg.domain.chat.entity.Chat;
import com.shinhan.formyegg.global.error.exception.MemberException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface BoardService {
    BoardDto createBoard(BoardDto boardDto) throws IOException, MemberException;
}
