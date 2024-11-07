package com.example.user.user.controller;

import com.example.user.common.dto.ApiResponse;
import com.example.user.common.dto.UserDTO;
import com.example.user.user.dto.request.UserRequestDTO;
import com.example.user.user.dto.response.UserCoupleTokenDto;
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
import java.util.List;
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
    public ResponseEntity<ApiResponse<List<UserResponseDTO>>> getUsers(@AuthenticationPrincipal UserEntity user) ***REMOVED***
        List<UserResponseDTO> userResponseDTOList = userService.userInfo(user);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(userResponseDTOList,"유저 정보 호출 성공"));
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
            @RequestBody UserRequestDTO userRequestDTO) ***REMOVED***

        Map<String, Object> updates = new HashMap<>();
        if (userRequestDTO.getPhone() != null) updates.put("phone", userRequestDTO.getPhone());
        if (userRequestDTO.getName() != null) updates.put("name", userRequestDTO.getName());
        if (userRequestDTO.getAddress() != null) updates.put("address", userRequestDTO.getAddress());
        if (userRequestDTO.getEmail() != null) updates.put("email", userRequestDTO.getEmail());
        if (userRequestDTO.getDate() != null) updates.put("date", userRequestDTO.getDate());

        userService.updateUserInfo(user.getId(), updates);

        // 성공 응답
        return ResponseEntity.ok(ApiResponse.success("회원 정보 수정 완료"));
    ***REMOVED***

    @PatchMapping(value = "/picture", consumes = "multipart/form-data")
    public ResponseEntity<ApiResponse<Void>> updateUserPicture(
            @AuthenticationPrincipal UserEntity user,
            @RequestPart(value = "picture", required = false) MultipartFile picture) ***REMOVED***

        if (picture != null && !picture.isEmpty()) ***REMOVED***
            Map<String, Object> updates = new HashMap<>();
            updates.put("picture", picture);

            userService.updateUserInfo(user.getId(), updates);
        ***REMOVED***

        return ResponseEntity.ok(ApiResponse.success("프로필 사진 수정 완료"));
    ***REMOVED***


    @PatchMapping("/couple-connect")
    public ResponseEntity<ApiResponse<UserResponseDTO>> connectCouple(@AuthenticationPrincipal UserEntity user, @RequestBody Map<String, String> codeRequest) ***REMOVED***
        String code = codeRequest.get("code");
        UserResponseDTO userResponseDTO = userService.connectCoupleCode(code,user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(userResponseDTO,"커플코드 연결 성공"));
    ***REMOVED***

    @GetMapping("/fcm-token/***REMOVED***code***REMOVED***")
    public ResponseEntity<ApiResponse<UserCoupleTokenDto>> getFcmToken(@AuthenticationPrincipal UserEntity user)***REMOVED***
        UserCoupleTokenDto userCoupleTokenDto = userService.getFcmToken(user.getCoupleCode(),user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(userCoupleTokenDto,"FCM 토큰 조회 성공"));
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
