package com.example.user.security.OAuth2;

import com.example.user.security.dto.CustomOAuth2User;
import com.example.user.security.jwt.JWTUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CustomSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JWTUtil jwtUtil;
    private final RedisTemplate<String, String> redisTemplate;
    public CustomSuccessHandler(JWTUtil jwtUtil, RedisTemplate redisTemplate) {
        this.jwtUtil = jwtUtil;
        this.redisTemplate = redisTemplate;
    }

    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        //OAuth2User
        CustomOAuth2User customUserDetails = (CustomOAuth2User) authentication.getPrincipal();

        Long id = customUserDetails.getUserId();

        String redirectUrl = "http://weddy.info/callback?id=" + id;
//        String redirectUrl = "https://naver.com";
        getRedirectStrategy().sendRedirect(request, response, redirectUrl);

    }
}
