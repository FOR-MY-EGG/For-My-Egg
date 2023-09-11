package com.shinhan.formyegg.domain.board.repository;

import com.shinhan.formyegg.api.board.dto.BoardDetailRes;
import com.shinhan.formyegg.domain.board.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    @Query(name = "findBoardsAndNickname", nativeQuery = true)
    List<BoardDetailRes> findBoardsAndNicknameByAffiliation(int affiliation, Pageable page);
}
