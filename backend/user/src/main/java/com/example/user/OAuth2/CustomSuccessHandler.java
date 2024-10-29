package com.example.user.OAuth2;


import com.example.user.dto.CustomOAuth2User;
import com.example.user.jwt.JWTUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Collection;
import java.util.Iterator;

@Component
public class CustomSuccessHandler extends SimpleUrlAuthenticationSuccessHandler ***REMOVED***

    private final JWTUtil jwtUtil;
    public CustomSuccessHandler(JWTUtil jwtUtil) ***REMOVED***
        this.jwtUtil = jwtUtil;
    ***REMOVED***

    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException ***REMOVED***

        //OAuth2User
        CustomOAuth2User customUserDetails = (CustomOAuth2User) authentication.getPrincipal();

        String username = customUserDetails.getUsername();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iterator = authorities.iterator();
        GrantedAuthority auth = iterator.next();
        String role = auth.getAuthority();

        String token = jwtUtil.createJwt(username, role, 60*60*60L);

        response.setHeader("Authorization", "Bearer " + token);
        response.sendRedirect("/auth");

    ***REMOVED***
//    private Cookie createCookie(String key, String value) ***REMOVED***
//
//        Cookie cookie = new Cookie(key, value);
//        cookie.setMaxAge(60*60*60);
//        //cookie.setSecure(true);
//        cookie.setPath("/");
//        cookie.setHttpOnly(true);
//
//        return cookie;
//    ***REMOVED***
***REMOVED***
