package com.example.user.user.repository;


import com.example.user.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> ***REMOVED***

    UserEntity findBySocialId(String socialId);
    Optional<UserEntity> findByCoupleCode(String coupleCode);
    Optional<UserEntity> findByOtherId(Long otherId);
***REMOVED***
