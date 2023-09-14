package com.shinhan.formyegg.domain.memo.repository;

import com.shinhan.formyegg.domain.child.entity.Child;
import com.shinhan.formyegg.domain.group.entity.Group;
import com.shinhan.formyegg.domain.memo.entity.Memo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface MemoRepository extends JpaRepository<Memo, Long> {
    List<Memo> findAllByGroupId_FamilyIdAndChildId_ChildIdAndCreateDateBetween(Long groupId, Long childId, LocalDateTime startDate,
                                                              LocalDateTime endDate);
    List<Memo> findAllByGroupId_FamilyIdAndChildId_ChildId(Long groupId, Long childId);

//    @Query(value = "select * from memo where group_id=:groupId and child_id=:childId and DATE(create_date) = :createDate", nativeQuery = true)
    Optional<Memo> findMemoByGroupId_FamilyIdAndChildId_ChildIdAndCreateDate(Long groupId, Long childId, LocalDate createDate);
    Optional<Memo> findMemoByCreateDate(LocalDate createDate);
}
