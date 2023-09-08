package com.shinhan.formyegg.domain.child.service;


import com.shinhan.formyegg.domain.child.dto.ChildDto;
import com.shinhan.formyegg.domain.child.entity.Child;
import com.shinhan.formyegg.domain.child.repository.ChildRepository;
import com.shinhan.formyegg.domain.member.dto.MemberDto;
import com.shinhan.formyegg.domain.member.entity.Member;
import com.shinhan.formyegg.global.error.ErrorCode;
import com.shinhan.formyegg.global.error.exception.MemberException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ChildServiceImpl implements ChildService{
    private final ChildRepository childRepository;

    @Override
    public ChildDto getChildByChildId(Long childId){
        Optional<Child> optionalChild = childRepository.findAllByChildId(childId);
        if (optionalChild.isEmpty())
            throw new MemberException(ErrorCode.NOT_EXIST_KID);
        return ChildDto.from(optionalChild.get());
    }
}
