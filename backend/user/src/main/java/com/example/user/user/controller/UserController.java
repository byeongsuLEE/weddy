package com.example.user.user.controller;

import com.example.user.common.dto.ApiResponse;
import com.example.user.common.dto.UserDTO;
import com.example.user.user.dto.response.UserResponseDTO;
import com.example.user.user.entity.UserEntity;
import com.example.user.security.jwt.BlackTokenService;
import com.example.user.user.repository.UserRepository;
import com.example.user.security.service.TokenService;
import com.example.user.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController ***REMOVED***
    private final UserService userService;
    private final TokenService tokenService;
    private final BlackTokenService blackTokenService;
    private final UserRepository userRepository;

    public UserController(UserService userService, TokenService tokenService, BlackTokenService blackTokenService, UserRepository userRepository) ***REMOVED***
        this.userService = userService;
        this.tokenService = tokenService;
        this.blackTokenService = blackTokenService;
        this.userRepository = userRepository;
    ***REMOVED***

    @GetMapping
    public ResponseEntity<ApiResponse<UserResponseDTO>> getUsers(@AuthenticationPrincipal UserEntity user) ***REMOVED***
        UserResponseDTO userResponseDTO = userService.userInfo(user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(userResponseDTO,"유저 정보 호출 성공"));
    ***REMOVED***

    @GetMapping("/couple-code")
    public ResponseEntity<ApiResponse<UserResponseDTO>> getCoupleCode(@AuthenticationPrincipal UserEntity user) ***REMOVED***
        UserResponseDTO userResponseDTO = userService.coupleCode(user.getCoupleCode());
        return  ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(userResponseDTO,"커플 코드 조회 성공"));
    ***REMOVED***

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logoutUser (@AuthenticationPrincipal UserEntity user,@RequestHeader("Authorization") String authorizationHeader) ***REMOVED***
        String token = authorizationHeader.startsWith("Bearer ") ? authorizationHeader.substring(7) : authorizationHeader;
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success("로그아웃 성공"));
    ***REMOVED***

    @PatchMapping
    public ResponseEntity<ApiResponse<Void>> updateUser(
            @AuthenticationPrincipal UserEntity user,
            @RequestParam(required = false) String phone,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String address,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String date,
            @RequestParam(required = false) MultipartFile picture) ***REMOVED***

        Map<String, Object> updates = new HashMap<>();
        if (phone != null) updates.put("phone", phone);
        if (name != null) updates.put("name", name);
        if (address != null) updates.put("address", address);
        if (email != null) updates.put("email", email);
        if (date != null) updates.put("date", date);
        if (picture != null) updates.put("picture", picture);

        userService.updateUserInfo(user.getId(), updates);

        // 성공 응답
        return ResponseEntity.ok(ApiResponse.success("회원 정보 수정 완료"));
    ***REMOVED***


    @PatchMapping("/couple-connect")
    public ResponseEntity<ApiResponse<UserResponseDTO>> connectCouple(@AuthenticationPrincipal UserEntity user, @RequestBody Map<String, String> codeRequest) ***REMOVED***
        String code = codeRequest.get("code");
        UserResponseDTO userResponseDTO = userService.connectCoupleCode(code,user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(userResponseDTO,"커플코드 연결 성공"));
    ***REMOVED***

//    @GetMapping("/test")
//    public APIResponse test(@AuthenticationPrincipal UserEntity user) ***REMOVED***
//        try ***REMOVED***
//            return APIResponse.builder()
//                    .data(user)
//                    .build();
//        ***REMOVED***catch (Exception e)***REMOVED***
//            return APIResponse.builder()
//                    .status(500)
//                    .message("에러")
//                    .build();
//        ***REMOVED***
//    ***REMOVED***
***REMOVED***
