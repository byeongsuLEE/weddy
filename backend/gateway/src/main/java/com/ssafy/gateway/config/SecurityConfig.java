package com.ssafy.gateway.config;

import com.ssafy.gateway.jwt.JWTFilter;
import com.ssafy.gateway.jwt.JWTUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    private final JWTUtil jwtUtil;

    public SecurityConfig(JWTUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
        return http
                .csrf(ServerHttpSecurity.CsrfSpec::disable)  // CSRF 비활성화
                .httpBasic(ServerHttpSecurity.HttpBasicSpec::disable)
                .authorizeExchange(exchange -> exchange
                        .pathMatchers(
                                "/auth/**",
                                "/api/login",
                                "/api/oauth2/**",
                                "/api/login/**",
                                "/api/users/token",
                                "/api/users/token/**"
                        ).permitAll() // 인증 및 OAuth2 경로 허용
                        .anyExchange().authenticated()) // 나머지 요청은 인증 필요
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .addFilterAt(new JWTFilter(jwtUtil), SecurityWebFiltersOrder.AUTHENTICATION) // JWTFilter를 추가
                .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://weddy.info:5173", "http://weddy.info:5174", "https://weddy.info"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);
        configuration.setExposedHeaders(List.of("Authorization"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
