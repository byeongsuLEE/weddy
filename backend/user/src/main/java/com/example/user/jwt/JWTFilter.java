package com.example.user.jwt;


import com.example.user.dto.CustomOAuth2User;
import com.example.user.dto.UserDTO;
import com.example.user.entity.UserEntity;
import com.example.user.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Slf4j
@Component
public class JWTFilter extends OncePerRequestFilter ***REMOVED***

    private final JWTUtil jwtUtil;
    private final UserRepository userRepository;
    private final BlackTokenService blackTokenService;

    public JWTFilter(JWTUtil jwtUtil, UserRepository userRepository, BlackTokenService blackTokenService) ***REMOVED***
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.blackTokenService = blackTokenService;
    ***REMOVED***
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) ***REMOVED***
        String path = request.getRequestURI();

        // 제외할 경로를 리스트로 정의
        List<String> excludedPaths = List.of(
                "/login",
                "/login/**",
                "/oauth2",
                "/api/login",
                "/api/login/**",
                "/users/token",
                "/users/token/**",
                "/api/users/token",
                "/api/users/token/**"
                );

        // 경로 리스트에 포함된 항목이 요청 경로의 접두사인지 확인
        return excludedPaths.stream().anyMatch(path::startsWith);
    ***REMOVED***

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException ***REMOVED***

        String authorization = request.getHeader("Authorization");

        String token = authorization.substring(7);

        //토큰에서 username과 code 획득
        String username = jwtUtil.getUsername(token);
        String code = jwtUtil.getCode(token);
        Long id = jwtUtil.getUserId(token);

        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        //userDTO를 생성하여 값 set
        UserDTO userDTO = new UserDTO();
        userDTO.setId(id);
        userDTO.setCoupleCode(code);

        //UserDetails에 회원 정보 객체 담기
        CustomOAuth2User customOAuth2User = new CustomOAuth2User(userDTO);

        //스프링 시큐리티 인증 토큰 생성
        Authentication authToken = new UsernamePasswordAuthenticationToken(userEntity, null, customOAuth2User.getAuthorities());
        //세션에 사용자 등록
        SecurityContextHolder.getContext().setAuthentication(authToken);
        log.info("user filter 완료");
        filterChain.doFilter(request, response);
    ***REMOVED***
***REMOVED***
