package com.example.user.security.config;

import com.example.user.security.OAuth2.CustomSuccessHandler;
import com.example.user.security.jwt.JWTFilter;
import com.example.user.user.repository.UserRepository;
import com.example.user.security.service.CustomOAuth2UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Controller;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.List;

@Slf4j // 로깅 추가
@Controller
@EnableWebSecurity
public class SecurityConfig {

    private final CustomOAuth2UserService customOAuth2UserService;
    private final CustomSuccessHandler customSuccessHandler;
    private final JWTFilter jwtFilter;

    public SecurityConfig(CustomOAuth2UserService customOAuth2UserService, CustomSuccessHandler customSuccessHandler, JWTFilter jwtFilter) {
        this.customOAuth2UserService = customOAuth2UserService;
        this.customSuccessHandler = customSuccessHandler;
        this.jwtFilter = jwtFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, UserRepository userRepository) throws Exception {
        log.info("[SecurityConfig] SecurityFilterChain 설정 시작");

        // CORS 설정
        http.cors(corsCustomizer -> corsCustomizer.configurationSource(new CorsConfigurationSource() {
            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                log.info("[CORS 설정] 요청 URI: {}", request.getRequestURI());
                CorsConfiguration configuration = new CorsConfiguration();
                configuration.setAllowedOrigins(List.of("http://localhost:5173", "http://localhost:5174", "https://weddy.info"));
                configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
                configuration.setAllowedHeaders(List.of("*"));
                configuration.setAllowCredentials(true);
                configuration.setMaxAge(3600L);
                configuration.setExposedHeaders(List.of("Set-Cookie", "Authorization"));
                return configuration;
            }
        }));

        // 경로별 인가 작업 - 로그인 및 공개 경로만 허용
        http.authorizeHttpRequests(auth -> {
            log.info("[권한 설정] 공개 경로 허용");
            auth.requestMatchers(
                            "/",
                            "/oauth2",
                            "/api/oauth2",
                            "/api/oauth2/**",
                            "/login",
                            "/login/**",
                            "/users/token",
                            "/users/token/**",
                            "/api/users/token",
                            "/api/users/token/**").permitAll()
                    .anyRequest().authenticated();
        });

        // CSRF 비활성화
        log.info("[CSRF 설정] CSRF 비활성화");
        http.csrf(csrf -> csrf.disable());

        // 기본 로그인 방식 비활성화
        log.info("[폼 로그인 설정] 비활성화");
        http.formLogin(formLogin -> formLogin.disable());

        // HTTP Basic 인증 비활성화
        log.info("[HTTP Basic 인증] 비활성화");
        http.httpBasic(httpBasic -> httpBasic.disable());

        // JWT 필터 추가
        log.info("[JWT 필터 추가] UsernamePasswordAuthenticationFilter 전에 실행");
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        // 소셜 로그인 설정
        log.info("[소셜 로그인 설정] 시작");
        http.oauth2Login(oAuth2 -> {
            log.info("[소셜 로그인 설정] 로그인 페이지: http://weddy.info/login");
            oAuth2.loginPage("http://weddy.info/login")
                    .userInfoEndpoint(userInfo -> {
                        log.info("[소셜 로그인 설정] 사용자 정보 서비스 설정");
                        userInfo.userService(customOAuth2UserService);
                    })
                    .successHandler(customSuccessHandler);
        });

        // 세션 설정 : STATELESS
        log.info("[세션 관리 설정] STATELESS 모드 설정");
        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        log.info("[SecurityConfig] SecurityFilterChain 설정 완료");
        return http.build();
    }
}
