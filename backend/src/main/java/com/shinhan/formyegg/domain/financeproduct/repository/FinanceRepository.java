package com.shinhan.formyegg.domain.financeproduct.repository;

import com.shinhan.formyegg.domain.financeproduct.entity.FinanceProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FinanceRepository extends JpaRepository<FinanceProduct, Long> {
    Optional<FinanceProduct> findByType(String type);
}
