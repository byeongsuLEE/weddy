package com.ssafy.schedule.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsMvcConfig implements WebMvcConfigurer ***REMOVED***
    @Override
    public void addCorsMappings(CorsRegistry registry) ***REMOVED***
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173","https://localhost:5174","http://localhost:5174", "http://localhost:8080", "https://localhost:5173","https://stackup.live")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .exposedHeaders("Authorization", "x-xsrf-token", "Access-Control-Allow-Headers", "Origin", "Accept", "X-Requested-With", "Content-Type", "Access-Control-Request-Method", "Access-Control-Request-Headers")
                .allowCredentials(true);
    ***REMOVED***
***REMOVED***
