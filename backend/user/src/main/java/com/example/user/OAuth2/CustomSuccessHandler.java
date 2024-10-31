package com.example.user.OAuth2;

import com.example.user.dto.CustomOAuth2User;
import com.example.user.jwt.JWTUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CustomSuccessHandler extends SimpleUrlAuthenticationSuccessHandler ***REMOVED***

    private final JWTUtil jwtUtil;
    private final RedisTemplate<String, String> redisTemplate;
    public CustomSuccessHandler(JWTUtil jwtUtil, RedisTemplate redisTemplate) ***REMOVED***
        this.jwtUtil = jwtUtil;
        this.redisTemplate = redisTemplate;
    ***REMOVED***

    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException ***REMOVED***

        //OAuth2User
        CustomOAuth2User customUserDetails = (CustomOAuth2User) authentication.getPrincipal();

        Long id = customUserDetails.getUserId();

        String redirectUrl = "http://localhost:5173/callback?id=" + id;
//        String redirectUrl = "https://naver.com";
        getRedirectStrategy().sendRedirect(request, response, redirectUrl);

    ***REMOVED***
***REMOVED***
