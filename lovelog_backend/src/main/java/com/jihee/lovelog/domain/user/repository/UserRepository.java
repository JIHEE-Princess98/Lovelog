package com.jihee.lovelog.domain.user.repository;

import com.jihee.lovelog.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByLoginId(String loginId);
    boolean existsByEmail(String email);
}
