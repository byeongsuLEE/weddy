package com.example.user.security.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {

        corsRegistry.addMapping("/**")
                .allowedOrigins("http://localhost:5173", "http://localhost:5174", "https://2846-121-178-98-57.ngrok-free.app")  // 두 출처를 한 번에 추가
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")         // 허용할 HTTP 메서드 명시
                .allowedHeaders("*")                                               // 모든 헤더 허용
                .exposedHeaders("Authorization", "x-xsrf-token", "Access-Control-Allow-Headers", "Origin", "Accept", "X-Requested-With", "Content-Type", "Access-Control-Request-Method", "Access-Control-Request-Headers")        // 노출할 헤더 설정
                .allowCredentials(true)                                            // 쿠키 포함 허용
                .maxAge(3600L);
    }
}