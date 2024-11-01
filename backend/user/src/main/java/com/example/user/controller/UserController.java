package com.example.user.controller;

import com.example.user.dto.APIResponse;
import com.example.user.dto.response.UserResponseDTO;
import com.example.user.entity.UserEntity;
import com.example.user.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController ***REMOVED***
    private final UserService userService;

    public UserController(UserService userService) ***REMOVED***
        this.userService = userService;
    ***REMOVED***

    @GetMapping
    public APIResponse getUsers(@AuthenticationPrincipal UserEntity user) ***REMOVED***
        APIResponse response = userService.userInfo(user.getId());
        return response;
    ***REMOVED***

    @GetMapping("/couple-code")
    public APIResponse getCoupleCode(@AuthenticationPrincipal UserEntity user) ***REMOVED***
        UserResponseDTO userResponseDTO = userService.coupleCode(user.getCoupleCode());
        APIResponse apiResponse = APIResponse.builder()
                .status(200)
                .data(userResponseDTO)
                .build();
        return  apiResponse;
    ***REMOVED***

    @PatchMapping
    public APIResponse updateUser(@AuthenticationPrincipal UserEntity user) ***REMOVED***
        APIResponse apiResponse;
        try ***REMOVED***
            userService.patchUser(user);
            apiResponse = APIResponse.builder()
                    .status(200)
                    .message("회원 정보 수정 완료")
                    .build();
        ***REMOVED***
        catch (Exception e) ***REMOVED***
            apiResponse = APIResponse.builder()
                    .status(500)
                    .message("회원 정보 수정 에러")
                    .build();
        ***REMOVED***
        return  apiResponse;
    ***REMOVED***
***REMOVED***
