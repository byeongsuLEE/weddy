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
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final TokenService tokenService;
    private final BlackTokenService blackTokenService;
    private final UserRepository userRepository;

    public UserController(UserService userService, TokenService tokenService, BlackTokenService blackTokenService, UserRepository userRepository) {
        this.userService = userService;
        this.tokenService = tokenService;
        this.blackTokenService = blackTokenService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<UserResponseDTO>>> getUsers(@AuthenticationPrincipal UserEntity user) {
        List<UserResponseDTO> userResponseDTOList = userService.userInfo(user);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(userResponseDTOList,"유저 정보 호출 성공"));
    }

    @GetMapping("/couple-code")
    public ResponseEntity<ApiResponse<UserResponseDTO>> getCoupleCode(@AuthenticationPrincipal UserEntity user) {
        UserResponseDTO userResponseDTO = userService.coupleCode(user.getCoupleCode());
        return  ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(userResponseDTO,"커플 코드 조회 성공"));
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logoutUser (@AuthenticationPrincipal UserEntity user,@RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.startsWith("Bearer ") ? authorizationHeader.substring(7) : authorizationHeader;
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success("로그아웃 성공"));
    }

    @PatchMapping
    public ResponseEntity<ApiResponse<Void>> updateUser(
            @AuthenticationPrincipal UserEntity user,
            @RequestBody UserRequestDTO userRequestDTO) {

        Map<String, Object> updates = new HashMap<>();
        if (userRequestDTO.getPhone() != null) updates.put("phone", userRequestDTO.getPhone());
        if (userRequestDTO.getName() != null) updates.put("name", userRequestDTO.getName());
        if (userRequestDTO.getAddress() != null) updates.put("address", userRequestDTO.getAddress());
        if (userRequestDTO.getEmail() != null) updates.put("email", userRequestDTO.getEmail());
        if (userRequestDTO.getDate() != null) updates.put("date", userRequestDTO.getDate());

        userService.updateUserInfo(user.getId(), updates);

        // 성공 응답
        return ResponseEntity.ok(ApiResponse.success("회원 정보 수정 완료"));
    }

    @PatchMapping(value = "/picture", consumes = "multipart/form-data")
    public ResponseEntity<ApiResponse<Void>> updateUserPicture(
            @AuthenticationPrincipal UserEntity user,
            @RequestPart(value = "picture", required = false) MultipartFile picture) {

        if (picture != null && !picture.isEmpty()) {
            Map<String, Object> updates = new HashMap<>();
            updates.put("picture", picture);

            userService.updateUserInfo(user.getId(), updates);
        }

        return ResponseEntity.ok(ApiResponse.success("프로필 사진 수정 완료"));
    }


    @PatchMapping("/couple-connect")
    public ResponseEntity<ApiResponse<UserResponseDTO>> connectCouple(@AuthenticationPrincipal UserEntity user, @RequestBody Map<String, String> codeRequest) throws JsonProcessingException {
        String code = codeRequest.get("code");
        UserResponseDTO userResponseDTO = userService.connectCoupleCode(code,user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(userResponseDTO,"커플코드 연결 성공"));
    }

    @GetMapping("/fcm-token/{code}")
    public ResponseEntity<ApiResponse<UserCoupleTokenDto>> getFcmToken(@AuthenticationPrincipal UserEntity user, @PathVariable String code){
        UserCoupleTokenDto userCoupleTokenDto = userService.getFcmToken(code,user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(userCoupleTokenDto,"FCM 토큰 조회 성공"));
    }

    @PatchMapping("/fcm-token/{userId}")
    public ResponseEntity<ApiResponse<String>> setFcmToken(@AuthenticationPrincipal UserEntity user, @PathVariable Long userId, @RequestBody Map<String ,String> request){
        String fcmToken = request.get("fcmToken");
        userService.setFcmToken(userId,fcmToken);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success("FCM 토큰 저장 성공"));
    }

//    @GetMapping("/test")
//    public APIResponse test(@AuthenticationPrincipal UserEntity user) {
//        try {
//            return APIResponse.builder()
//                    .data(user)
//                    .build();
//        }catch (Exception e){
//            return APIResponse.builder()
//                    .status(500)
//                    .message("에러")
//                    .build();
//        }
//    }
}
