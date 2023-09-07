package com.shinhan.formyegg.domain.child.repository;

import com.shinhan.formyegg.domain.child.entity.Child;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChildRepository extends JpaRepository<Child, Long> {

    List<Child> findAll();
}
