package com.ssafy.gateway.jwt;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class BlackTokenService ***REMOVED***
    private final RedisTemplate<String, String> redisTemplate;
    private JWTUtil jwtUtil;
    public BlackTokenService(RedisTemplate<String, String> redisTemplate,JWTUtil jwtUtil) ***REMOVED***
        this.redisTemplate = redisTemplate;
        this.jwtUtil = jwtUtil;
    ***REMOVED***

    // 블랙리스트에 토큰 등록 (예: 로그아웃 시 호출)
    public void addToBlacklist(String token, Long userId) ***REMOVED***
        // 토큰의 남은 유효 시간 계산
        long expiration = jwtUtil.getExpire(token) - System.currentTimeMillis();
        if (expiration > 0) ***REMOVED***
            redisTemplate.opsForValue().set("blacklist:" + token, "true", expiration, TimeUnit.MILLISECONDS);
            redisTemplate.delete("userid:"+userId);
        ***REMOVED***
    ***REMOVED***

    // 토큰 블랙리스트 확인
    public boolean isBlacklisted(String token) ***REMOVED***
        return redisTemplate.hasKey("blacklist:" + token);
    ***REMOVED***

***REMOVED***
