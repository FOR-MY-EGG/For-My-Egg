package com.shinhan.formyegg.domain.child.repository;

import com.shinhan.formyegg.domain.child.entity.Child;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ChildRepository extends JpaRepository<Child, Long> {
    List<Child> findAllByGroupId_FamilyId(Long groupId);
    Optional<Child> findAllByChildId(Long childId);
}
