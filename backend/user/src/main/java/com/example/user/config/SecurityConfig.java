package com.example.user.config;


import com.example.user.OAuth2.CustomSuccessHandler;
import com.example.user.jwt.BlackTokenService;
import com.example.user.jwt.JWTFilter;
import com.example.user.jwt.JWTUtil;
import com.example.user.jwt.LogFilter;
import com.example.user.repository.UserRepository;
import com.example.user.service.CustomOAuth2UserService;
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

import java.util.Collections;
import java.util.List;

@Controller
@EnableWebSecurity
public class SecurityConfig ***REMOVED***

    private final CustomOAuth2UserService customOAuth2UserService;
    private final CustomSuccessHandler customSuccessHandler;
    private final JWTUtil jwtUtil;
    private final BlackTokenService blackTokenService;

    public SecurityConfig(CustomOAuth2UserService customOAuth2UserService, CustomSuccessHandler customSuccessHandler, JWTUtil jwtUtil, BlackTokenService blackTokenService) ***REMOVED***
        this.customOAuth2UserService = customOAuth2UserService;
        this.customSuccessHandler = customSuccessHandler;
        this.jwtUtil = jwtUtil;
        this.blackTokenService = blackTokenService;
    ***REMOVED***
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, UserRepository userRepository) throws Exception ***REMOVED***

        //cors
        http
                .cors(corsCustomizer -> corsCustomizer.configurationSource(new CorsConfigurationSource() ***REMOVED***

                    @Override
                    public CorsConfiguration getCorsConfiguration(HttpServletRequest request) ***REMOVED***

                        CorsConfiguration configuration = new CorsConfiguration();
                        configuration.setAllowedOrigins(List.of("http://localhost:5173", "http://localhost:5174"));
                        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                        configuration.setAllowedHeaders(List.of("*"));
                        configuration.setAllowCredentials(true);
                        configuration.setMaxAge(3600L);
                        configuration.setExposedHeaders(List.of("Set-Cookie", "Authorization"));
                        return configuration;
                    ***REMOVED***
                ***REMOVED***));
        //경로별 인가 작업
        http
                .authorizeHttpRequests((auth) -> auth
                        .requestMatchers(
                                "/",
                                "/login",
                                "/api/login",
                                "/api/oauth2/**",
                                "/api/login/**",
                                "/api/api/login/**",
                                "/users/token",
                                "/users/token/**").permitAll()  // 모든 요청에 /api 추가
                        .anyRequest().authenticated());
        //csrf disable
        http
                .csrf((auth) -> auth.disable());

        //From 로그인 방식 disable
        http
                .formLogin((auth) -> auth.disable());

        //HTTP Basic 인증 방식 disable
        http
                .httpBasic((auth) -> auth.disable());
        //로그필터
//        http
//                .addFilterBefore(new LogFilter(), UsernamePasswordAuthenticationFilter.class);
        //JWTFilter 추가
        http
                .addFilterBefore(new JWTFilter(jwtUtil,userRepository,blackTokenService), UsernamePasswordAuthenticationFilter.class);

        //oauth2
        //api/user/login?
        http
                .oauth2Login((oAuth2) -> oAuth2
                        .loginPage("http://localhost:5173/login")
                        .userInfoEndpoint((userInfoEndpointConfig) -> userInfoEndpointConfig
                        .userService(customOAuth2UserService))
                        .successHandler(customSuccessHandler))
                ;



        //세션 설정 : STATELESS
        http
                .sessionManagement((session) -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        return http.build();
    ***REMOVED***

***REMOVED***
