package com.example.user.security.controller;

import com.example.user.user.entity.UserEntity;
import com.example.user.security.jwt.JWTUtil;
import com.example.user.user.repository.UserRepository;
import com.example.user.security.service.TokenService;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/users/token")  // @RequestMapping으로 경로 지정
public class TokenController {

    private final JWTUtil jwtUtil;
    private final RedisTemplate<String, String> redisTemplate;
    private final TokenService tokenService;
    private final UserRepository userRepository;

    public TokenController(JWTUtil jwtUtil, RedisTemplate<String, String> redisTemplate, TokenService tokenService, UserRepository userRepository) {
        this.jwtUtil = jwtUtil;
        this.redisTemplate = redisTemplate;
        this.tokenService = tokenService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<Map<String, String>> reissue(@RequestParam("id") Long id) {
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Map<String, String> tokens = tokenService.generateTokens(userEntity);

        return ResponseEntity.ok(tokens);  // HTTP 상태 200 OK로 응답
    }

    @GetMapping("/super")
    public ResponseEntity<Map<String, String>> supperReissue(@RequestParam("id") Long id) {
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Map<String, String> tokens = tokenService.generateSuperTokens(userEntity);

        return ResponseEntity.ok(tokens);  // HTTP 상태 200 OK로 응답
    }
}
