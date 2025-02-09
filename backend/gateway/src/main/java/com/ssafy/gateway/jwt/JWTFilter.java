package com.ssafy.gateway.jwt;
import com.ssafy.gateway.jwt.JWTUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.util.List;

@Slf4j
public class JWTFilter implements WebFilter {

    private final JWTUtil jwtUtil;

    public JWTFilter(JWTUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        String path = exchange.getRequest().getURI().getPath();
        String method = String.valueOf(exchange.getRequest().getMethod());
        log.info("[요청 경로]: {}, [HTTP 메서드]: {}", path, method);

        // OPTIONS 요청은 무시
        if ("OPTIONS".equalsIgnoreCase(method)) {
            log.info("[JWTFilter] OPTIONS 요청입니다. 필터를 통과합니다.");
            return chain.filter(exchange);
        }

        // 제외할 경로 설정
        List<String> excludedPaths = List.of(
                "/login", "/api/oauth2",
                "/oauth2", "/api/login",
                "/users/token",
                "/users/token/**",
                "/api/users/token",
                "/api/users/token/**"
        );

        // 제외할 경로인 경우 다음 필터로 이동
        if (excludedPaths.stream().anyMatch(path::startsWith)) {
            log.info("[JWTFilter] 제외된 경로입니다. 필터를 통과합니다: {}", path);
            return chain.filter(exchange);
        }

        String authorization = exchange.getRequest().getHeaders().getFirst("Authorization");
        log.info("[JWTFilter] Authorization 헤더 값: {}", authorization);
        // Authorization 헤더가 없거나 Bearer 토큰 형식이 아닌 경우 필터 체인 계속
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            log.warn("[JWTFilter] Authorization 헤더가 없거나 올바르지 않은 형식입니다.");
            return chain.filter(exchange);
        }

        String token = authorization.substring(7);
        log.info("[JWTFilter] 추출된 토큰: {}", token);
        // 토큰 만료 확인
        if (jwtUtil.isExpired(token)) {
            log.info("토큰 만료됨");
            return chain.filter(exchange);
        }

        // 토큰에서 사용자 이름 추출
        String username = jwtUtil.getUsername(token);

        // 간단한 인증 객체 생성 및 SecurityContext에 설정
        Authentication authToken = new UsernamePasswordAuthenticationToken(username, null, List.of());
        log.info("필터인증완료");
        return chain.filter(exchange)
                .contextWrite(ReactiveSecurityContextHolder.withAuthentication(authToken));
    }
}
