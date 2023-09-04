package com.shinhan.formyegg.domain.member.service;

import org.springframework.stereotype.Service;

import com.shinhan.formyegg.domain.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl {
	private final MemberRepository memberRepository;

}
