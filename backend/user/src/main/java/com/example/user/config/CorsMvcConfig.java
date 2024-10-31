package com.example.user.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsMvcConfig implements WebMvcConfigurer ***REMOVED***

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) ***REMOVED***

        corsRegistry.addMapping("/**")
                .allowedOrigins("http://localhost:5173", "http://localhost:5174")  // 두 출처를 한 번에 추가
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")         // 허용할 HTTP 메서드 명시
                .allowedHeaders("*")                                               // 모든 헤더 허용
                .exposedHeaders("Set-Cookie", "Authorization")                     // 노출할 헤더 설정
                .allowCredentials(true)                                            // 쿠키 포함 허용
                .maxAge(3600L);
    ***REMOVED***
***REMOVED***