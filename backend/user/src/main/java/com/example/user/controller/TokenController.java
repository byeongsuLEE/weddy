package com.example.user.controller;

import com.example.user.entity.UserEntity;
import com.example.user.jwt.JWTUtil;
import com.example.user.repository.UserRepository;
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
    private final UserRepository userRepository;

    public TokenController(JWTUtil jwtUtil, RedisTemplate<String, String> redisTemplate,UserRepository userRepository) ***REMOVED***
        this.jwtUtil = jwtUtil;
        this.redisTemplate = redisTemplate;
        this.userRepository = userRepository;
    ***REMOVED***

    @GetMapping
    public ResponseEntity<Map<String, String>> reissue(@RequestParam Long id) ***REMOVED***
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        String accessToken = jwtUtil.createAccessToken(userEntity.getName(), userEntity.getId(), userEntity.getCode(), 60 * 60 * 60L);
        String refreshToken = jwtUtil.createRefreshToken(userEntity.getName(), userEntity.getId(), 24 * 60 * 60 * 60L);
        redisTemplate.opsForValue().set("userid:" + id, refreshToken, 1, TimeUnit.DAYS);

        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", "Bearer " + accessToken);
        tokens.put("refreshToken", "Bearer " + refreshToken);

        return ResponseEntity.ok(tokens);  // HTTP 상태 200 OK로 응답
    ***REMOVED***
***REMOVED***
