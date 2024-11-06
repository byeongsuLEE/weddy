package com.example.user.user.repository;


import com.example.user.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,Long> ***REMOVED***

    UserEntity findBySocialId(String socialId);
***REMOVED***
