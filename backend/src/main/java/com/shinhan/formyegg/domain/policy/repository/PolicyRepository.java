package com.shinhan.formyegg.domain.policy.repository;

import com.shinhan.formyegg.domain.policy.entity.Policy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PolicyRepository extends JpaRepository <Policy, Long>{

    public List<Policy> findAll();
}
