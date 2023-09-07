package com.shinhan.formyegg.domain.group.repository;

import com.shinhan.formyegg.domain.group.entity.Group;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface GroupRepository extends JpaRepository<Group, Long> {
    Optional<Group> findGroupByUuid(String uuid);
    Optional<Group> findGroupByGroupId(Long groupId);

}
