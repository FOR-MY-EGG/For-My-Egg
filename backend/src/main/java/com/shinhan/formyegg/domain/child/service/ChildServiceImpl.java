package com.shinhan.formyegg.domain.child.service;


import com.shinhan.formyegg.domain.child.repository.ChildRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChildServiceImpl {
    private final ChildRepository childRepository;
}
