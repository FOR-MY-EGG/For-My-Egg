package com.shinhan.formyegg.domain.group.entity;


import lombok.*;

import javax.persistence.*;

@Entity(name = "family_group")
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@Builder
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id", updatable = false)
    private Long familyId;

    @Column(name = "uuid", nullable = false, length = 100)
    private String uuid;

    public static Group from(Long groupId){
        return Group.builder()
                .familyId(groupId)
                .build();
    }
}
