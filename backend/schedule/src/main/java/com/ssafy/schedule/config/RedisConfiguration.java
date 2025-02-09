package com.ssafy.schedule.config;

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
import org.springframework.data.redis.serializer.GenericToStringSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
@RequiredArgsConstructor
@EnableRedisRepositories // Redis 레포지토리 기능 활성화
public class    RedisConfiguration {
    @Value("${spring.redis.schedule.host}")
    private String host;
    @Value("${spring.redis.schedule.port}")
    private int port;
    @Value("${spring.redis.schedule.password}")
    private String password;
    private final ObjectMapper objectMapper;


    /*
      RedisConnectionFactory 인터페이스를 통해
      LettuceConnectionFactory를 생성하여 반환
   */

    @Bean // 스프링 컨텍스트에 RedisConnectionFactory 빈 등록
    public RedisConnectionFactory redisConnectionFactory() {
        // LettuceConnectionFactory를 사용하여 Redis 연결 팩토리 생성, 호스트와 포트 정보를 사용
        RedisStandaloneConfiguration redisStandaloneConfiguration = new RedisStandaloneConfiguration(host, port);
        redisStandaloneConfiguration.setPassword(password);
        redisStandaloneConfiguration.setDatabase(2);
        return new LettuceConnectionFactory(redisStandaloneConfiguration);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>(); // RedisTemplate 인스턴스 생성
        redisTemplate.setConnectionFactory(redisConnectionFactory()); // Redis 연결 팩토리 설정

        // 키와 값 직렬화 설정
        StringRedisSerializer stringSerializer = new StringRedisSerializer();
        GenericJackson2JsonRedisSerializer jsonSerializer = new GenericJackson2JsonRedisSerializer(objectMapper);

        redisTemplate.setKeySerializer(stringSerializer); // 키를 문자열로 직렬화
        redisTemplate.setValueSerializer(jsonSerializer); // 값을 JSON으로 직렬화
        redisTemplate.setHashKeySerializer(stringSerializer); // 해시 키를 문자열로 직렬화
        redisTemplate.setHashValueSerializer(jsonSerializer); // 해시 값을 JSON으로 직렬화
//        redisTemplate.setHashKeySerializer(new GenericToStringSerializer<>(Long.class)); // 키를 문자열이 아닌 숫자로 저장할 수 있도록 설정

        redisTemplate.afterPropertiesSet();
        return redisTemplate; // 설정이 완료된 RedisTemplate 인스턴스를 반환
    }
}
