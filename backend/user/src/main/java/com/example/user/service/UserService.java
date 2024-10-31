package com.example.user.service;

import com.example.user.dto.APIResponse;
import com.example.user.entity.UserEntity;
import com.example.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService ***REMOVED***

    private final UserRepository userRepository;
    public UserService(UserRepository userRepository)***REMOVED***
        this.userRepository = userRepository;
    ***REMOVED***

    public APIResponse<UserEntity> userInfo(Long userId)***REMOVED***
        APIResponse<UserEntity> response = new APIResponse.Builder<UserEntity>()
                .status(200)
                .data(userRepository.findById(userId)
                        .orElseThrow(() -> new RuntimeException("User not found")))
                .build();
        return response;
    ***REMOVED***
***REMOVED***
