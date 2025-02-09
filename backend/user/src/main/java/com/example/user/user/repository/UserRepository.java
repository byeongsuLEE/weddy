package com.example.user.user.repository;


import com.example.user.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {

    UserEntity findBySocialId(String socialId);
    Optional<UserEntity> findByOtherId(Long otherId);
    List<UserEntity> findByCoupleCode(String coupleCode);
    int countByCoupleCode(String coupleCode);
}
