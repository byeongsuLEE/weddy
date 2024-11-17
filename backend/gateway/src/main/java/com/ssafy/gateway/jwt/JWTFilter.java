package com.ssafy.gateway.jwt;
import com.ssafy.gateway.jwt.JWTUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.util.List;

@Slf4j
@Component
public class JWTFilter implements WebFilter ***REMOVED***

    private final JWTUtil jwtUtil;

    public JWTFilter(JWTUtil jwtUtil) ***REMOVED***
        this.jwtUtil = jwtUtil;
    ***REMOVED***

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) ***REMOVED***
        String path = exchange.getRequest().getURI().getPath();

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
        if (excludedPaths.stream().anyMatch(path::startsWith)) ***REMOVED***
            return chain.filter(exchange);
        ***REMOVED***

        String authorization = exchange.getRequest().getHeaders().getFirst("Authorization");

        // Authorization 헤더가 없거나 Bearer 토큰 형식이 아닌 경우 필터 체인 계속
        if (authorization == null || !authorization.startsWith("Bearer ")) ***REMOVED***
            return chain.filter(exchange);
        ***REMOVED***

        String token = authorization.substring(7);

        // 토큰 만료 확인
        if (jwtUtil.isExpired(token)) ***REMOVED***
            log.info("토큰 만료됨");
            return chain.filter(exchange);
        ***REMOVED***

        // 토큰에서 사용자 이름 추출
        String username = jwtUtil.getUsername(token);

        // 간단한 인증 객체 생성 및 SecurityContext에 설정
        Authentication authToken = new UsernamePasswordAuthenticationToken(username, null, List.of());
        log.info("필터인증완료");
        return chain.filter(exchange)
                .contextWrite(ReactiveSecurityContextHolder.withAuthentication(authToken));
    ***REMOVED***
***REMOVED***
