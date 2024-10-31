package com.example.user.controller;

import com.example.user.entity.UserEntity;
import com.example.user.jwt.JWTUtil;
import com.example.user.repository.UserRepository;
import com.example.user.service.TokenService;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/users/reissue")  // @RequestMapping으로 경로 지정
public class TokenController ***REMOVED***

    private final JWTUtil jwtUtil;
    private final RedisTemplate<String, String> redisTemplate;
    private final TokenService tokenService;
    private final UserRepository userRepository;

    public TokenController(JWTUtil jwtUtil, RedisTemplate<String, String> redisTemplate, TokenService tokenService, UserRepository userRepository) ***REMOVED***
        this.jwtUtil = jwtUtil;
        this.redisTemplate = redisTemplate;
        this.tokenService = tokenService;
        this.userRepository = userRepository;
    ***REMOVED***

    @GetMapping
    public ResponseEntity<Map<String, String>> reissue(@RequestParam Long id) ***REMOVED***
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Map<String, String> tokens = tokenService.generateTokens(userEntity);

        return ResponseEntity.ok(tokens);  // HTTP 상태 200 OK로 응답
    ***REMOVED***

    @GetMapping("/super")
    public ResponseEntity<Map<String, String>> supperReissue(@RequestParam Long id) ***REMOVED***
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Map<String, String> tokens = tokenService.generateSuperTokens(userEntity);

        return ResponseEntity.ok(tokens);  // HTTP 상태 200 OK로 응답
    ***REMOVED***
***REMOVED***
