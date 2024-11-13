package com.ssafy.product.global.util;

import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;

@Component
public class JwtUtil ***REMOVED***
    private SecretKey secretKey;

    public JwtUtil(@Value("$***REMOVED***jwt.secret-key***REMOVED***")String secret) ***REMOVED***
        secretKey = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), Jwts.SIG.HS256.key().build().getAlgorithm());
    ***REMOVED***
    public String getUsername(String token) ***REMOVED***
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("userName", String.class);
    ***REMOVED***
    public String getCode(String token) ***REMOVED***
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("coupleCode", String.class);
    ***REMOVED***
    public Long getUserId(String token) ***REMOVED***
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("id", Long.class);
    ***REMOVED***

    public String resolveToken(HttpServletRequest request) ***REMOVED***
        return request.getHeader("Authorization").substring(7);
    ***REMOVED***
***REMOVED***