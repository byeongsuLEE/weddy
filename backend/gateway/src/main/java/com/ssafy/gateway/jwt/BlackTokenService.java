package com.ssafy.gateway.jwt;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class BlackTokenService {
    private final RedisTemplate<String, String> redisTemplate;
    private JWTUtil jwtUtil;
    public BlackTokenService(RedisTemplate<String, String> redisTemplate,JWTUtil jwtUtil) {
        this.redisTemplate = redisTemplate;
        this.jwtUtil = jwtUtil;
    }

    // 블랙리스트에 토큰 등록 (예: 로그아웃 시 호출)
    public void addToBlacklist(String token, Long userId) {
        // 토큰의 남은 유효 시간 계산
        long expiration = jwtUtil.getExpire(token) - System.currentTimeMillis();
        if (expiration > 0) {
            redisTemplate.opsForValue().set("blacklist:" + token, "true", expiration, TimeUnit.MILLISECONDS);
            redisTemplate.delete("userid:"+userId);
        }
    }

    // 토큰 블랙리스트 확인
    public boolean isBlacklisted(String token) {
        return redisTemplate.hasKey("blacklist:" + token);
    }

}
