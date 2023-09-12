package com.shinhan.formyegg.domain.policy.service;

import com.shinhan.formyegg.api.policy.dto.PolicyRes;
import com.shinhan.formyegg.domain.policy.entity.Policy;
import com.shinhan.formyegg.domain.policy.repository.PolicyRepository;
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
public class PolicyServiceImpl implements PolicyService{

    private final PolicyRepository policyRepository;
    @Override
    public List<PolicyRes> getPolicyByType(int type) {
        List<Policy> policies = policyRepository.findPolicyByType(type);
        if(policies.isEmpty()) throw new GroupException(ErrorCode.NOT_EXIST_POLICY);
        return policies.stream().map(PolicyRes::from).collect(Collectors.toList());
    }

    @Override
    public List<PolicyRes> getPolicyByIsMulti() {
        List<Policy> policies = policyRepository.findPolicyByIsMultiIsTrue();
        if(policies.isEmpty()) throw new GroupException(ErrorCode.NOT_EXIST_POLICY);
        return policies.stream().map(PolicyRes::from).collect(Collectors.toList());
    }
}
