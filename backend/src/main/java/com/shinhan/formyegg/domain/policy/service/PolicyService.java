package com.shinhan.formyegg.domain.policy.service;


import com.shinhan.formyegg.api.policy.dto.PolicyRes;

import java.util.List;

public interface PolicyService{

    List<PolicyRes> getPolicyByType(int type);

    List<PolicyRes> getPolicyByIsMulti();
}
