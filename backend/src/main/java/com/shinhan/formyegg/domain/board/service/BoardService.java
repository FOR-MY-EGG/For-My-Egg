package com.shinhan.formyegg.domain.board.service;

import com.shinhan.formyegg.api.board.dto.BoardDetailRes;
import com.shinhan.formyegg.api.board.dto.BoardListRes;
import com.shinhan.formyegg.domain.board.dto.BoardDto;
import com.shinhan.formyegg.global.error.exception.BoardException;
import com.shinhan.formyegg.global.error.exception.MemberException;
import org.springframework.data.domain.Page;

import java.io.IOException;
import java.util.List;

public interface BoardService {
    BoardDto createBoard(BoardDto boardDto) throws IOException, MemberException;
    BoardDto detailBoard(long boardId) throws BoardException;
    List<BoardDetailRes> getBoardByAffiliation(int affiliation, int page);

}
