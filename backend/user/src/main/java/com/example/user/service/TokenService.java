package com.example.user.service;

import com.example.user.entity.UserEntity;
import com.example.user.jwt.JWTUtil;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
public class TokenService ***REMOVED***
    private final JWTUtil jwtUtil;
    private final RedisTemplate<String, String> redisTemplate;

    public TokenService(JWTUtil jwtUtil, RedisTemplate<String, String> redisTemplate) ***REMOVED***
        this.jwtUtil = jwtUtil;
        this.redisTemplate = redisTemplate;
    ***REMOVED***

    public Map<String, String> generateTokens(UserEntity userEntity) ***REMOVED***
        String accessToken = jwtUtil.createAccessToken(userEntity.getName(), userEntity.getId(), userEntity.getCode(), 5 * 60 * 60L);
        String refreshToken = jwtUtil.createRefreshToken(userEntity.getName(), userEntity.getId(), 24 * 5 * 60 * 60L);

        // Redis에 Refresh Token 저장
        redisTemplate.opsForValue().set("userid:" + userEntity.getId(), refreshToken, 1, TimeUnit.DAYS);

        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", "Bearer " + accessToken);
        tokens.put("refreshToken", "Bearer " + refreshToken);

        return tokens;
    ***REMOVED***
    public Map<String, String> generateSuperTokens(UserEntity userEntity) ***REMOVED***
        System.out.println(30 * 24 * 60 * 60 * 60L);
        String accessToken = jwtUtil.createAccessToken(userEntity.getName(), userEntity.getId(), userEntity.getCode(), 30 * 24 * 60 * 60L);
        String refreshToken = jwtUtil.createRefreshToken(userEntity.getName(), userEntity.getId(), 300 * 24 * 60 * 60L);

        // Redis에 Refresh Token 저장
        redisTemplate.opsForValue().set("userid:" + userEntity.getId(), refreshToken, 1, TimeUnit.DAYS);

        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", "Bearer " + accessToken);
        tokens.put("refreshToken", "Bearer " + refreshToken);

        System.out.println("SpuerToken Generated");

        return tokens;
    ***REMOVED***
***REMOVED***
