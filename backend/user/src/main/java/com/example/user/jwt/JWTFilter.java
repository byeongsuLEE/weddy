package com.example.user.jwt;


import com.example.user.dto.CustomOAuth2User;
import com.example.user.dto.UserDTO;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class JWTFilter extends OncePerRequestFilter ***REMOVED***

    private final JWTUtil jwtUtil;

    public JWTFilter(JWTUtil jwtUtil) ***REMOVED***

        this.jwtUtil = jwtUtil;
    ***REMOVED***
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) ***REMOVED***
        String path = request.getRequestURI();
        return path.startsWith("/login") || path.startsWith("/oauth2") || path.startsWith("/api/login");
    ***REMOVED***

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException ***REMOVED***


        String authorization = request.getHeader("Authorization");

        //Authorization 헤더 검증
        if (authorization == null || !authorization.startsWith("Bearer ")) ***REMOVED***
            System.out.println("token null or invalid format");
            filterChain.doFilter(request, response);
            return;
        ***REMOVED***
        String token = authorization.substring(7);

        //토큰 소멸 시간 검증
        if (jwtUtil.isExpired(token)) ***REMOVED***

            System.out.println("token expired");
            filterChain.doFilter(request, response);

            //조건이 해당되면 메소드 종료 (필수)
            return;
        ***REMOVED***

        //토큰에서 username과 role 획득
        String username = jwtUtil.getUsername(token);
        String role = jwtUtil.getRole(token);

        //userDTO를 생성하여 값 set
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername(username);
        userDTO.setRole(role);

        //UserDetails에 회원 정보 객체 담기
        CustomOAuth2User customOAuth2User = new CustomOAuth2User(userDTO);

        //스프링 시큐리티 인증 토큰 생성
        Authentication authToken = new UsernamePasswordAuthenticationToken(customOAuth2User, null, customOAuth2User.getAuthorities());
        //세션에 사용자 등록
        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);
    ***REMOVED***
***REMOVED***
