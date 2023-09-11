 package com.shinhan.formyegg.api.board.controller;

 import com.shinhan.formyegg.api.board.dto.BoardCreateReq;
 import com.shinhan.formyegg.api.board.dto.BoardCreateRes;
 import com.shinhan.formyegg.api.board.dto.BoardDetailRes;
 import com.shinhan.formyegg.api.board.dto.BoardListRes;
 import com.shinhan.formyegg.domain.board.dto.BoardDto;
 import com.shinhan.formyegg.domain.board.entity.Board;
 import com.shinhan.formyegg.domain.board.service.BoardService;
 import com.shinhan.formyegg.domain.comment.service.CommentService;
 import com.shinhan.formyegg.global.error.exception.BoardException;
 import com.shinhan.formyegg.global.error.exception.MemberException;
 import io.swagger.annotations.Api;
 import io.swagger.annotations.ApiOperation;
 import lombok.RequiredArgsConstructor;
 import org.springframework.data.domain.Page;
 import org.springframework.http.ResponseEntity;
 import org.springframework.transaction.annotation.Transactional;
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
     private final CommentService commentService;

     @ApiOperation(value = "게시글 등록", notes = "커뮤니티 타입에 따른 게시글 등록")
     @PostMapping("/{affiliation}")
     public ResponseEntity<BoardCreateRes> createBoard(@RequestPart BoardCreateReq board, @RequestPart MultipartFile image) throws IOException, MemberException {
         BoardCreateRes boardRes = BoardCreateRes.from(boardService.createBoard(BoardDto.from(board, image)));
         return ResponseEntity.ok(boardRes);
     }

     @ApiOperation(value = "게시글 상세 내역 조회", notes = " 커뮤니티 타입에 따른 게시글 상세 내역 조회")
     @GetMapping("/{affiliation}")
     public ResponseEntity<List<BoardDetailRes>> getBoardsByAffiliation(@PathVariable int affiliation, int page) throws BoardException {
         return ResponseEntity.ok(boardService.getBoardByAffiliation(affiliation, page));
     }
 }
