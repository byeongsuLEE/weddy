package com.ssafy.gateway.config;

import com.ssafy.gateway.jwt.JWTFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.server.WebFilter;

@Configuration
public class SecurityConfig ***REMOVED***

    private final JWTFilter jwtFilter;

    public SecurityConfig(JWTFilter jwtFilter) ***REMOVED***
        this.jwtFilter = jwtFilter;
    ***REMOVED***

    @Bean
    public WebFilter jwtValidationFilter() ***REMOVED***
        return jwtFilter;
    ***REMOVED***
***REMOVED***
