package com.example.user.security.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class LogFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // 요청 정보 로그 출력
        System.out.println("Request URI: " + request.getRequestURI());
        System.out.println("Request Method: " + request.getMethod());
        request.getHeaderNames().asIterator().forEachRemaining(header ->
                System.out.println("Header: " + header + " = " + request.getHeader(header)));

        // 필터 체인에 넘김
        filterChain.doFilter(request, response);

        // 응답 정보 로그 출력
        System.out.println("Response Status: " + response.getStatus());
    }
}