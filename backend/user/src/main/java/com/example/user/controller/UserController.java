package com.example.user.controller;

import com.example.user.dto.APIResponse;
import com.example.user.dto.response.UserResponseDTO;
import com.example.user.entity.UserEntity;
import com.example.user.jwt.BlackTokenService;
import com.example.user.service.TokenService;
import com.example.user.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController ***REMOVED***
    private final UserService userService;
    private final TokenService tokenService;
    private final BlackTokenService blackTokenService;

    public UserController(UserService userService, TokenService tokenService, BlackTokenService blackTokenService) ***REMOVED***
        this.userService = userService;
        this.tokenService = tokenService;
        this.blackTokenService = blackTokenService;
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

    @PostMapping("/logout")
    public APIResponse logoutUser (@AuthenticationPrincipal UserEntity user,@RequestHeader("Authorization") String authorizationHeader) ***REMOVED***
        APIResponse apiResponse;
        String token = authorizationHeader.startsWith("Bearer ") ? authorizationHeader.substring(7) : authorizationHeader;
        try ***REMOVED***
            blackTokenService.addToBlacklist(token,user.getId());
            apiResponse = APIResponse.builder()
                    .status(200)
                    .message("로그아웃 완료")
                    .build();
        ***REMOVED***
        catch (Exception e) ***REMOVED***
            apiResponse = APIResponse.builder()
                    .status(500)
                    .message("로그아웃 에러")
                    .build();
        ***REMOVED***
        return apiResponse;
    ***REMOVED***
***REMOVED***
