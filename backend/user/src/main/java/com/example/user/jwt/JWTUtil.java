package com.example.user.jwt;

import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JWTUtil ***REMOVED***

    private SecretKey secretKey;
    public JWTUtil(@Value("$***REMOVED***jwt.secret-key***REMOVED***")String secret) ***REMOVED***
        secretKey = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), Jwts.SIG.HS256.key().build().getAlgorithm());
    ***REMOVED***
    public String getUsername(String token) ***REMOVED***

        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("username", String.class);
    ***REMOVED***

    public String getRole(String token) ***REMOVED***

        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("role", String.class);
    ***REMOVED***

    public Boolean isExpired(String token) ***REMOVED***

        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().getExpiration().before(new Date());
    ***REMOVED***

    public String createAccessToken(String userId, String role, Long expiredMs) ***REMOVED***

        return Jwts.builder()
                .claim("username", userId)
                .claim("role", role)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiredMs))
                .signWith(secretKey)
                .compact();
    ***REMOVED***

    public String createRefreshToken(String userId, Long expiredMs) ***REMOVED***
        return Jwts.builder()
                .setSubject(userId)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiredMs))
                .signWith(secretKey)
                .compact();
    ***REMOVED***
***REMOVED***
