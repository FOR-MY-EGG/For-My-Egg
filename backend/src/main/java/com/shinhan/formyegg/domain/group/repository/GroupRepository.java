package com.shinhan.formyegg.domain.group.repository;

import com.shinhan.formyegg.domain.group.entity.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {
    Optional<Group> findGroupByUuid(String uuid);
    Optional<Group> findGroupByFamilyId(Long familyId);

}
