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

        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("userName", String.class);
    ***REMOVED***

    public String getCode(String token) ***REMOVED***
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("code", String.class);
    ***REMOVED***
    public Long getUserId(String token) ***REMOVED***
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("id", Long.class);
    ***REMOVED***

    public Boolean isExpired(String token) ***REMOVED***

        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().getExpiration().before(new Date());
    ***REMOVED***

    public String createAccessToken(String username,Long id, String code, Long expiredMs) ***REMOVED***

        return Jwts.builder()
                .claim("id",id)
                .claim("userName", username)
                .claim("code", code)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiredMs*1000))
                .signWith(secretKey)
                .compact();
    ***REMOVED***

    public String createRefreshToken(String username, Long id, Long expiredMs) ***REMOVED***
        return Jwts.builder()
                .setSubject(id.toString())
                .claim("userName", username)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiredMs*1000))
                .signWith(secretKey)
                .compact();
    ***REMOVED***
***REMOVED***
