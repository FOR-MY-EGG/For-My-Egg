 package com.shinhan.formyegg.api.board.controller;

 import com.shinhan.formyegg.api.board.dto.BoardReq;
 import com.shinhan.formyegg.api.board.dto.BoardRes;
 import com.shinhan.formyegg.api.chat.dto.ChatRes;
 import com.shinhan.formyegg.domain.board.dto.BoardDto;
 import com.shinhan.formyegg.domain.board.service.BoardService;
 import com.shinhan.formyegg.domain.chat.service.ChatService;
 import com.shinhan.formyegg.global.error.exception.MemberException;
 import io.swagger.annotations.Api;
 import io.swagger.annotations.ApiOperation;
 import lombok.RequiredArgsConstructor;
 import org.springframework.http.ResponseEntity;
 import org.springframework.web.bind.annotation.*;
 import org.springframework.web.multipart.MultipartFile;

 import java.io.IOException;
 import java.util.List;

 @Api(value = "게시판 API", tags = {"Board"})
 @RestController
 @RequiredArgsConstructor
 @RequestMapping("/api/board")
 public class BoardController {
     private final BoardService boardService;

     @ApiOperation(value = "게시글 등록", notes = "커뮤니티 타입에 따른 게시글 등록")
     @PostMapping("/{affiliation}")
     public ResponseEntity<BoardRes> createBoard(@RequestPart BoardReq board, @RequestPart MultipartFile image) throws IOException, MemberException {
         BoardRes boardRes = BoardRes.from(boardService.createBoard(BoardDto.from(board, image)));
         return ResponseEntity.ok(boardRes);
     }


 }
