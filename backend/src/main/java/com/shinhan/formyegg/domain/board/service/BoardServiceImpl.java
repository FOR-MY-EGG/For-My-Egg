package com.shinhan.formyegg.domain.board.service;

import com.shinhan.formyegg.domain.board.dto.BoardDto;
import com.shinhan.formyegg.domain.board.entity.Board;
import com.shinhan.formyegg.domain.board.repository.BoardRepository;
import com.shinhan.formyegg.domain.member.entity.Member;
import com.shinhan.formyegg.domain.member.repository.MemberRepository;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.BoardException;
import com.shinhan.formyegg.global.error.exception.MemberException;

//import com.shinhan.formyegg.global.util.S3Uploader;

import com.shinhan.formyegg.global.util.S3Uploader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardServiceImpl implements BoardService {
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final S3Uploader s3Uploader;
    @Value("${board.image.path}")
    private String imagePath;

    @Override
    public BoardDto createBoard(BoardDto boardDto) throws IOException, MemberException {
        Optional<Member> optionalMember = memberRepository.findByMemberId(boardDto.getWriter());
        if(!optionalMember.isPresent()) throw new MemberException(ErrorCode.NOT_EXIST_MEMBER);
        String storedImageName = s3Uploader.upload(boardDto.getImageFile(), imagePath);
        Board board = boardRepository.save(Board.from(boardDto, optionalMember.get(), storedImageName));
        return BoardDto.from(board);
    }

    @Transactional
    @Override
    public BoardDto detailBoard(long boardId) throws BoardException {
        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        if (!optionalBoard.isPresent()) throw new BoardException(ErrorCode.NOT_EXIST_BOARD);
        optionalBoard.get().setView(optionalBoard.get().getView()+1);
        return BoardDto.from(optionalBoard.get());
    }
}

