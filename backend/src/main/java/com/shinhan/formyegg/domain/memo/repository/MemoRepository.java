package com.shinhan.formyegg.domain.memo.repository;

import com.shinhan.formyegg.domain.child.entity.Child;
import com.shinhan.formyegg.domain.group.entity.Group;
import com.shinhan.formyegg.domain.memo.entity.Memo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface MemoRepository extends JpaRepository<Memo, Long> {
    List<Memo> findAllByGroupId_FamilyIdAndChildId_ChildIdAndCreateDateBetween(Long groupId, Long childId, LocalDateTime startDate,
                                                              LocalDateTime endDate);
}
