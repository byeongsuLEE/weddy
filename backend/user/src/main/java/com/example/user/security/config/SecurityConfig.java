package com.example.user.security.config;


import com.example.user.security.OAuth2.CustomSuccessHandler;
import com.example.user.security.jwt.JWTFilter;
import com.example.user.user.repository.UserRepository;
import com.example.user.security.service.CustomOAuth2UserService;
import jakarta.servlet.http.HttpServletRequest;
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

@Controller
@EnableWebSecurity
public class SecurityConfig ***REMOVED***

    private final CustomOAuth2UserService customOAuth2UserService;
    private final CustomSuccessHandler customSuccessHandler;
    private final JWTFilter jwtFilter;

    public SecurityConfig(CustomOAuth2UserService customOAuth2UserService, CustomSuccessHandler customSuccessHandler, JWTFilter jwtFilter) ***REMOVED***
        this.customOAuth2UserService = customOAuth2UserService;
        this.customSuccessHandler = customSuccessHandler;
        this.jwtFilter = jwtFilter;
    ***REMOVED***

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, UserRepository userRepository) throws Exception ***REMOVED***

        // CORS 설정
        http.cors(corsCustomizer -> corsCustomizer.configurationSource(new CorsConfigurationSource() ***REMOVED***
            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) ***REMOVED***
                CorsConfiguration configuration = new CorsConfiguration();
                configuration.setAllowedOrigins(List.of("http://localhost:5173", "http://localhost:5174","https://weddy.info"));
                configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
                configuration.setAllowedHeaders(List.of("*"));
                configuration.setAllowCredentials(true);
                configuration.setMaxAge(3600L);
                configuration.setExposedHeaders(List.of("Set-Cookie", "Authorization"));
                return configuration;
            ***REMOVED***
        ***REMOVED***));

        // 경로별 인가 작업 - 로그인 및 공개 경로만 허용
        http.authorizeHttpRequests((auth) -> auth
                .requestMatchers(
                        "/",
                        "/oauth2",
                        "/api/oauth2",
                        "/login",
                        "/login/**",
                        "/users/token",
                        "/users/token/**",
                        "/api/users/token",
                        "/api/users/token/**").permitAll()
                .anyRequest().authenticated());

        // CSRF 비활성화
        http.csrf((auth) -> auth.disable());

        // 기본 로그인 방식 비활성화
        http.formLogin((auth) -> auth.disable());

        // HTTP Basic 인증 비활성화
        http.httpBasic((auth) -> auth.disable());

        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        // 소셜 로그인 설정
        http.oauth2Login((oAuth2) -> oAuth2
                .loginPage("http://weddy.info/login")
                .userInfoEndpoint((userInfoEndpointConfig) -> userInfoEndpointConfig
                        .userService(customOAuth2UserService))
                .successHandler(customSuccessHandler));

        // 세션 설정 : STATELESS
        http.sessionManagement((session) -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    ***REMOVED***
***REMOVED***
