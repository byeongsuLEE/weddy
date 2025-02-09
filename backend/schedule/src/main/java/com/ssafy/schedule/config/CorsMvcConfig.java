package com.ssafy.schedule.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsMvcConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173","https://localhost:5174","http://localhost:5174", "http://localhost:8080", "https://localhost:5173",
                        "http://weddy.info",   // 추가 (필요한 경우 포트 포함)
                        "https://weddy.info")   // 추가 (HTTPS 포트 포함))
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .exposedHeaders("Authorization", "x-xsrf-token", "Access-Control-Allow-Headers", "Origin", "Accept", "X-Requested-With", "Content-Type", "Access-Control-Request-Method", "Access-Control-Request-Headers")
                .allowCredentials(true);
    }
}
