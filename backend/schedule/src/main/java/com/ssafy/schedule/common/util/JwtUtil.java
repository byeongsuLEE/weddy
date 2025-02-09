package com.ssafy.schedule.common.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;

@Slf4j
@Component
public class JwtUtil {

    @Value("${jwt.secret-key}")
    private String secretKeyStr; // application.yml에서 주입받는 SECRET_KEY

    private SecretKey secretKey;

    @PostConstruct
    public void init() {
        // SecretKeySpec을 사용하여 SecretKey 생성
        secretKey = new SecretKeySpec(secretKeyStr.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
    }

    /**
     * Access Token에서 userId 추출
     */
    public Long extractUserId(String token) {
        Claims claims = parseClaims(token);
        return claims.get("id", Long.class);
    }

    /**
     * Access Token에서 coupleCode 추출
     */
    public String extractCode(String token) {
        Claims claims = parseClaims(token);
        return claims.get("coupleCode", String.class);
    }

    /**
     * JWT Claims 파싱 메서드
     */
    private Claims parseClaims(String accessToken) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(accessToken)
                    .getBody();
        } catch (ExpiredJwtException e) {
            log.warn("Expired JWT token: {}", e.getMessage());
            return e.getClaims();
        } catch (JwtException e) {
            log.error("Invalid JWT token: {}", e.getMessage());
            throw new JwtException("Invalid token");
        }
    }
}
