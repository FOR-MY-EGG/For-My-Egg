package com.shinhan.formyegg.domain.financeproduct.service;


import com.shinhan.formyegg.api.finance.dto.FinanceRes;

import java.util.List;

public interface FinanceService {
    List<FinanceRes> getFinanceProductsByType(int type);

}
