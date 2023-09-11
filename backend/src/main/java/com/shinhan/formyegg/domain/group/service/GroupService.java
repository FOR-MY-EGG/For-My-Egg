package com.shinhan.formyegg.domain.group.service;

import com.shinhan.formyegg.domain.group.dto.GroupDto;

public interface GroupService {
    GroupDto createGroup(Long memberId);
    GroupDto invitateGroup(Long memberId, GroupDto groupDto);
}
