package com.shinhan.formyegg.domain.child.service;

import com.shinhan.formyegg.api.child.dto.ChildCreateReq;
import com.shinhan.formyegg.domain.child.dto.ChildDto;

public interface ChildService {

    ChildDto getChildByChildId(Long childId);

    void createChildAndAccount(Long groupId, ChildCreateReq childCreateReq);
}
