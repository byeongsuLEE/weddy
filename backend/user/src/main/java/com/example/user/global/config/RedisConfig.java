package com.example.user.global.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
@RequiredArgsConstructor
@EnableRedisRepositories // Redis 레포지토리 기능 활성화
public class RedisConfig ***REMOVED***
    @Value("$***REMOVED***spring.redis.product.host***REMOVED***")
    private String host;
    @Value("$***REMOVED***spring.redis.product.port***REMOVED***")
    private int port;
    @Value("$***REMOVED***spring.redis.product.password***REMOVED***")
    private String password;
    private final ObjectMapper objectMapper;

    @Bean // 스프링 컨텍스트에 RedisConnectionFactory 빈 등록
    public RedisConnectionFactory redisConnectionFactory() ***REMOVED***
        // LettuceConnectionFactory를 사용하여 Redis 연결 팩토리 생성, 호스트와 포트 정보를 사용
        RedisStandaloneConfiguration redisStandaloneConfiguration = new RedisStandaloneConfiguration(host, port);
        redisStandaloneConfiguration.setPassword(password);
        return new LettuceConnectionFactory(redisStandaloneConfiguration);
    ***REMOVED***

    @Bean
    public RedisTemplate<String, Object> redisTemplate() ***REMOVED***
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>(); // RedisTemplate 인스턴스 생성
        redisTemplate.setConnectionFactory(redisConnectionFactory()); // Redis 연결 팩토리 설정

        // 키와 값 직렬화 설정
        StringRedisSerializer stringSerializer = new StringRedisSerializer();
        GenericJackson2JsonRedisSerializer jsonSerializer = new GenericJackson2JsonRedisSerializer(objectMapper);

        redisTemplate.setKeySerializer(stringSerializer); // 키를 문자열로 직렬화
        redisTemplate.setValueSerializer(jsonSerializer); // 값을 JSON으로 직렬화
        redisTemplate.setHashKeySerializer(stringSerializer); // 해시 키를 문자열로 직렬화
        redisTemplate.setHashValueSerializer(jsonSerializer); // 해시 값을 JSON으로 직렬화

        redisTemplate.afterPropertiesSet();
        return redisTemplate; // 설정이 완료된 RedisTemplate 인스턴스를 반환
    ***REMOVED***
***REMOVED***
