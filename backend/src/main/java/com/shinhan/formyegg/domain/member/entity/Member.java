package com.shinhan.formyegg.domain.member.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.shinhan.formyegg.domain.BaseTimeEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Member extends BaseTimeEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long memberId;

	@Column(nullable = false, length = 45)
	private String address;

	private int incomeRank;

	@Column(nullable = false, length = 10)
	private String name;

	@Column(nullable = false, length = 10)
	private String nickname;

	@Column(nullable = false, unique = true)
	private String kakaoId;

	@Column(nullable = false)
	private String kakaoToken;
}
