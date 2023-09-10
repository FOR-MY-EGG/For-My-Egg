package com.shinhan.formyegg.domain.financeproduct.service;

import com.shinhan.formyegg.api.finance.dto.FinanceRes;
import com.shinhan.formyegg.api.policy.dto.PolicyRes;
import com.shinhan.formyegg.domain.financeproduct.entity.FinanceProduct;
import com.shinhan.formyegg.domain.financeproduct.repository.FinanceRepository;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.GroupException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class FinanceServiceImpl implements FinanceService{

    private final FinanceRepository financeRepository;
    @Override
    public List<FinanceRes> getFinanceProductsByType(int type) {
        List<FinanceProduct> finances = financeRepository.findFinanceProductByType(type);
        if(finances.isEmpty()) throw new GroupException(ErrorCode.NOT_EXIST_FINANCE);
        return finances.stream().map(FinanceRes::from).collect(Collectors.toList());
    }
}
