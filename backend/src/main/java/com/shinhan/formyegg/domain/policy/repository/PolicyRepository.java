package com.shinhan.formyegg.domain.policy.repository;

import com.shinhan.formyegg.domain.policy.entity.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;
import java.util.List;

public interface PolicyRepository extends JpaRepository <Policy, Long>{

    List<Policy> findAll();

    @Query("SELECT p FROM Policy p WHERE p.targetStart <= :targetValue AND p.targetEnd >= :targetValue")
    Optional<Policy> findPolicyInRange(@Param("targetValue") int targetValue);

    Optional<Policy> findByChildCnt(int childCnt);
}
