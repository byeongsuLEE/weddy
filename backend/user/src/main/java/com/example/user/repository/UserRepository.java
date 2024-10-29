package com.example.user.repository;


import com.example.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,Long> ***REMOVED***

    UserEntity findbyUsername(String Username);

***REMOVED***
