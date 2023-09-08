 package com.shinhan.formyegg.api.comment.controller;

 import com.shinhan.formyegg.api.chat.dto.ChatRes;
 import com.shinhan.formyegg.api.comment.dto.CommentReq;
 import com.shinhan.formyegg.api.comment.dto.CommentRes;
 import com.shinhan.formyegg.domain.chat.service.ChatService;
 import com.shinhan.formyegg.domain.comment.service.CommentService;
 import com.shinhan.formyegg.global.error.exception.BoardException;
 import io.swagger.annotations.Api;
 import io.swagger.annotations.ApiOperation;
 import lombok.RequiredArgsConstructor;
 import org.springframework.http.ResponseEntity;
 import org.springframework.web.bind.annotation.*;

 import java.util.List;

 @Api(value = "댓글 API", tags = {"Comment"})
 @RestController
 @RequiredArgsConstructor
 @RequestMapping("/api/comment")
 public class CommentController {
     private final CommentService commentService;

     @ApiOperation(value = "댓글 추가", notes = "게시글에 댓글 추가")
     @PostMapping("/{boardId}")
     public ResponseEntity<CommentRes> createComment(@PathVariable long boardId, @RequestBody CommentReq commentReq) throws BoardException {
         CommentRes commentRes = commentService.createComment(boardId, commentReq);
         return ResponseEntity.ok().body(commentRes);
     }
 }