package com.example.user.service;

import com.example.user.dto.APIResponse;
import com.example.user.dto.UserDTO;
import com.example.user.dto.response.UserResponseDTO;
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
        APIResponse response = APIResponse.builder()
                .status(200)
                .data(userRepository.findById(userId)
                        .orElseThrow(()->new RuntimeException("user not found")))
                .build();
        return response;
    ***REMOVED***

    public UserResponseDTO coupleCode(String coupleCode)***REMOVED***
        UserResponseDTO userResponseDTO = UserResponseDTO.builder()
                .coupleCode(coupleCode)
                .build();

        return userResponseDTO;
    ***REMOVED***

    public void patchUser(UserEntity userEntity)***REMOVED***
        userRepository.save(userEntity);
    ***REMOVED***
***REMOVED***
