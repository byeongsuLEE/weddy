package com.example.user.security.jwt;

import com.example.user.security.dto.CustomOAuth2User;
import com.example.user.common.dto.UserDTO;
import com.example.user.user.entity.UserEntity;
import com.example.user.user.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
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
public class JWTFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;
    private final UserRepository userRepository;
    private final BlackTokenService blackTokenService;

    public JWTFilter(JWTUtil jwtUtil, UserRepository userRepository, BlackTokenService blackTokenService) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.blackTokenService = blackTokenService;
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
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
        boolean isExcluded = excludedPaths.stream().anyMatch(path::startsWith);
        if (isExcluded) {
            log.info("[JWTFilter] 제외된 경로 요청: {}", path);
        }
        return isExcluded;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String path = request.getRequestURI();
        String method = request.getMethod();
        log.info("[요청 경로]: {}, [HTTP 메서드]: {}", path, method);

        String authorization = request.getHeader("Authorization");
        log.info("[JWTFilter] Authorization 헤더 값: {}", authorization);

        // Authorization 헤더가 없거나 Bearer 토큰 형식이 아닌 경우 필터 체인 계속
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            log.warn("[JWTFilter] Authorization 헤더가 없거나 올바르지 않은 형식입니다.");
            filterChain.doFilter(request, response);
            return;
        }

        String token = authorization.substring(7);
        log.info("[JWTFilter] 추출된 토큰: {}", token);

        // 토큰 만료 확인
        if (jwtUtil.isExpired(token)) {
            log.info("[JWTFilter] 토큰 만료됨");
            filterChain.doFilter(request, response);
            return;
        }

        // 토큰에서 사용자 정보 추출
        String username = jwtUtil.getUsername(token);
        String code = jwtUtil.getCode(token);
        Long id = jwtUtil.getUserId(token);
        log.info("[JWTFilter] 추출된 사용자 정보: username={}, code={}, id={}", username, code, id);

        // 사용자 정보 로드
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        log.info("[JWTFilter] 사용자 정보 로드 완료: {}", userEntity);

        // userDTO 생성
        UserDTO userDTO = new UserDTO();
        userDTO.setId(id);
        userDTO.setCoupleCode(code);

        // UserDetails 객체 생성
        CustomOAuth2User customOAuth2User = new CustomOAuth2User(userDTO);

        // 인증 객체 생성
        Authentication authToken = new UsernamePasswordAuthenticationToken(
                userEntity, null, customOAuth2User.getAuthorities());
        log.info("[JWTFilter] 인증 객체 생성 완료: {}", authToken);

        // 스프링 시큐리티 컨텍스트에 설정
        SecurityContextHolder.getContext().setAuthentication(authToken);
        log.info("[JWTFilter] 인증 객체 컨텍스트에 설정 완료");

        filterChain.doFilter(request, response);
        log.info("[JWTFilter] 필터 체인 완료");
    }
}
