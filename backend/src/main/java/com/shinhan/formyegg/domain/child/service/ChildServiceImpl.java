package com.shinhan.formyegg.domain.child.service;


import com.shinhan.formyegg.api.child.dto.ChildCreateReq;
import com.shinhan.formyegg.domain.account.entity.Account;
import com.shinhan.formyegg.domain.account.repository.AccountRepository;
import com.shinhan.formyegg.domain.child.dto.ChildDto;
import com.shinhan.formyegg.domain.child.entity.Child;
import com.shinhan.formyegg.domain.child.repository.ChildRepository;
import com.shinhan.formyegg.domain.group.entity.Group;
import com.shinhan.formyegg.domain.group.repository.GroupRepository;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.entity.Member;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.GroupException;
import com.shinhan.formyegg.global.error.exception.MemberException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ChildServiceImpl implements ChildService{
    private final ChildRepository childRepository;
    private final GroupRepository groupRepository;
    private final AccountRepository accountRepository;

    @Override
    public ChildDto getChildByChildId(Long childId){
        Optional<Child> optionalChild = childRepository.findAllByChildId(childId);
        if (optionalChild.isEmpty())
            throw new MemberException(ErrorCode.NOT_EXIST_KID);
        return ChildDto.from(optionalChild.get());
    }

    @Override
    public void createChildAndAccount(Long groupId, ChildCreateReq childCreateReq) {
        Optional<Group> optionalGroup = groupRepository.findById(groupId);
        if(!optionalGroup.isPresent()) throw new GroupException(ErrorCode.NOT_EXIST_GROUP);
        Account account = accountRepository.save(Account.from(childCreateReq));
        childRepository.save(Child.from(childCreateReq, optionalGroup.get(), account));
    }
}
