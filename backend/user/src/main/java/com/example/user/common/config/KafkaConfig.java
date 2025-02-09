package com.example.user.common.config;

import com.example.user.cart.dto.response.CartProductDto;
import com.example.user.cart.dto.response.CartResponseDto;
import com.example.user.payment.dto.request.PaymentProductInfo;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.*;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

/**
 * 작성자   : 이병수
 * 작성날짜 : 2024-11-03
 * 설명    : 카프카 브로커랑 연결 설정 메서드
 * Kafka 클러스터에 연결할 정보와 직렬화 방식을 지정합니다.
 * 이를 통해 프로듀서가 Kafka 브로커에 연결하고 데이터를 전송할 준비를 갖추게 됩니다.
 */
@Configuration
public class KafkaConfig {
    @Value("${kafka.bootstrapAddress}")
    private String BOOTSTRAPSERVERS;
    ;  // 카프카 연결을 위한 브로커인 부트스트랩 서버 주소


    @Bean
    public ProducerFactory<String, PaymentProductInfo> kafkaProducerFactory() {

        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, BOOTSTRAPSERVERS);
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class); // 키 직렬화
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class); // 값 직렬화

        return new DefaultKafkaProducerFactory<>(config);
    }

    @Bean
    public KafkaTemplate<String, PaymentProductInfo> kafkaTemplate() {
        return new KafkaTemplate<>(kafkaProducerFactory());
    }

    // 상품정보용 Kafka 프로듀서
    @Bean
    public ProducerFactory<String,Object> defaultkafkaProducerFactory() {

        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, BOOTSTRAPSERVERS);
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class); // 키 직렬화
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class); // 값 직렬화

        return new DefaultKafkaProducerFactory<>(config);
    }

    @Bean
    @Qualifier("defaultKafkaTemplate")
    public KafkaTemplate<String,Object> defaultkafkaTemplate() {
        return new KafkaTemplate<>(defaultkafkaProducerFactory());
    }

    // 상품정보용 Kafka 컨슈머 설정
    @Bean
    public ConsumerFactory<String, CartProductDto> cartConsumerFactory(){

        Map<String, Object> config = new HashMap<>();
        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, BOOTSTRAPSERVERS);
        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class); // 키 역직렬화
        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class); // 값 역직렬화 (JSON)

        // JsonDeserializer 설정
        JsonDeserializer<CartProductDto> deserializer = new JsonDeserializer<>(CartProductDto.class);
        deserializer.addTrustedPackages("*"); // 모든 패키지에서 오는 클래스 신뢰

        return new DefaultKafkaConsumerFactory<>(config, new StringDeserializer(), deserializer);
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, CartProductDto> cartKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, CartProductDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(cartConsumerFactory());
        return factory;
    }



}
