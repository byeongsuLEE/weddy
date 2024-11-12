package com.example.user.common.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.GenericToStringSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
@RequiredArgsConstructor
@EnableRedisRepositories // Redis 레포지토리 기능 활성화
public class RedisConfig ***REMOVED***
    @Value("$***REMOVED***spring.redis.user.host***REMOVED***")
    private String host;
    @Value("$***REMOVED***spring.redis.user.port***REMOVED***")
    private int port;
    @Value("$***REMOVED***spring.redis.user.password***REMOVED***")
    private String password;



    @Bean // 스프링 컨텍스트에 RedisConnectionFactory 빈 등록
    public RedisConnectionFactory redisConnectionFactory() ***REMOVED***
        // LettuceConnectionFactory를 사용하여 Redis 연결 팩토리 생성, 호스트와 포트 정보를 사용
        RedisStandaloneConfiguration redisStandaloneConfiguration = new RedisStandaloneConfiguration(host, port);
        redisStandaloneConfiguration.setPassword(password);
        return new LettuceConnectionFactory(redisStandaloneConfiguration);
    ***REMOVED***

    @Bean("redisUserTemplate") // 스프링 컨텍스트에 RedisTemplate 빈 등록
    public RedisTemplate<String, String> userRedisTemplate() ***REMOVED***
        RedisTemplate<String, String> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory());

        // 키와 값 직렬화 설정
        StringRedisSerializer stringSerializer = new StringRedisSerializer();
        redisTemplate.setKeySerializer(stringSerializer); // 일반 키를 문자열로 직렬화
        redisTemplate.setHashKeySerializer(stringSerializer); // 해시 키를 문자열로 직렬화
        redisTemplate.setHashValueSerializer(stringSerializer); // 해시 값을 문자열로 직렬화

        redisTemplate.afterPropertiesSet();
        return redisTemplate;
    ***REMOVED***

    @Bean
    @Primary // 기본 빈으로 설정
    public RedisTemplate<String, String> redisTemplate(RedisConnectionFactory connectionFactory) ***REMOVED***
        RedisTemplate<String, String> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(connectionFactory);
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(new StringRedisSerializer());
        return redisTemplate;
    ***REMOVED***
***REMOVED***
