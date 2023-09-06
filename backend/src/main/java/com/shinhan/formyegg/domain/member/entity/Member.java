package com.shinhan.formyegg.domain.member.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.shinhan.formyegg.domain.member.dto.MemberDto;
import lombok.*;
import com.shinhan.formyegg.domain.BaseTimeEntity;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Member extends BaseTimeEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long memberId;

	@Column(nullable = false, length = 45)
	private String address;

	private int incomeRank;

	@Column(nullable = false, length = 10)
	private String name;

	@Column(nullable = false, length = 20)
	private String nickname;

	@Column(nullable = false, unique = true)
	private String kakaoId;

	@Column(nullable = false)
	private String kakaoToken;

	public static Member from(MemberDto memberDto){
		return Member.builder()
				.memberId(memberDto.getMemberId())
				.address(memberDto.getAddress())
				.incomeRank(memberDto.getIncomeRank())
				.name(memberDto.getName())
				.nickname(memberDto.getNickname())
				.kakaoId(memberDto.getKakaoId())
				.kakaoToken(memberDto.getKakaoToken())
				.build();
	}

	public void updateNickname(String nickname){
		this.nickname = nickname;
	}

	public void updateAddressAndIncomeRank(String address, int incomeRank){
		this.address = address;
		this.incomeRank = incomeRank;

	}
}
