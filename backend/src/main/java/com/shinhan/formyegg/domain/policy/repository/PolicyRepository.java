package com.shinhan.formyegg.domain.policy.repository;

import com.shinhan.formyegg.domain.policy.entity.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;
import java.util.List;

public interface PolicyRepository extends JpaRepository <Policy, Long>{

    List<Policy> findAll();

    List<Policy> findPolicyByType(int type);

    List<Policy> findPolicyByIsMultiIsTrue();
}
