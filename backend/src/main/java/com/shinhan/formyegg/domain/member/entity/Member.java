package com.shinhan.formyegg.domain.member.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

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
public class Member {
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

	@CreatedDate
	@Column(nullable = false)
	private LocalDateTime createDate;
	
}
