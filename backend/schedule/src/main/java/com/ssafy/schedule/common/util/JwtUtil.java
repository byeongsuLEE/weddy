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
public class JwtUtil ***REMOVED***

    @Value("$***REMOVED***jwt.secret-key***REMOVED***")
    private String secretKeyStr; // application.yml에서 주입받는 SECRET_KEY

    private SecretKey secretKey;

    @PostConstruct
    public void init() ***REMOVED***
        // SecretKeySpec을 사용하여 SecretKey 생성
        secretKey = new SecretKeySpec(secretKeyStr.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
    ***REMOVED***

    /**
     * Access Token에서 userId 추출
     */
    public Long extractUserId(String token) ***REMOVED***
        Claims claims = parseClaims(token);
        return claims.get("id", Long.class);
    ***REMOVED***

    /**
     * Access Token에서 coupleCode 추출
     */
    public String extractCode(String token) ***REMOVED***
        Claims claims = parseClaims(token);
        return claims.get("coupleCode", String.class);
    ***REMOVED***

    /**
     * JWT Claims 파싱 메서드
     */
    private Claims parseClaims(String accessToken) ***REMOVED***
        try ***REMOVED***
            return Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(accessToken)
                    .getBody();
        ***REMOVED*** catch (ExpiredJwtException e) ***REMOVED***
            log.warn("Expired JWT token: ***REMOVED******REMOVED***", e.getMessage());
            return e.getClaims();
        ***REMOVED*** catch (JwtException e) ***REMOVED***
            log.error("Invalid JWT token: ***REMOVED******REMOVED***", e.getMessage());
            throw new JwtException("Invalid token");
        ***REMOVED***
    ***REMOVED***
***REMOVED***
