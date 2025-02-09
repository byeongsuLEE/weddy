package com.example.user.security.jwt;

import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JWTUtil {

    private SecretKey secretKey;
    public JWTUtil(@Value("${jwt.secret-key}")String secret) {
        secretKey = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), Jwts.SIG.HS256.key().build().getAlgorithm());
    }
    public String getUsername(String token) {

        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("userName", String.class);
    }

    public String getCode(String token) {
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("coupleCode", String.class);
    }
    public Long getUserId(String token) {
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("id", Long.class);
    }

    public Long getExpire(String token) {
        return Jwts.parser().verifyWith(secretKey).build().parseClaimsJws(token).getBody().getExpiration().getTime();
    }

    public Boolean isExpired(String token) {

        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().getExpiration().before(new Date());
    }

    public String createAccessToken(String username,Long id, String coupleCode, Long expiredMs) {

        return Jwts.builder()
                .claim("id",id)
                .claim("userName", username)
                .claim("coupleCode", coupleCode)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiredMs*1000))
                .signWith(secretKey)
                .compact();
    }

    public String createRefreshToken(String username, Long id, Long expiredMs) {
        return Jwts.builder()
                .setSubject(id.toString())
                .claim("userName", username)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiredMs*1000))
                .signWith(secretKey)
                .compact();
    }
}
