package com.ssafy.product.global.config;

import com.ssafy.product.product.dto.response.ProductResponseDto;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.*;
import org.springframework.kafka.support.serializer.ErrorHandlingDeserializer;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@EnableKafka
@Configuration
public class KafkaConfig ***REMOVED***
    @Value("$***REMOVED***kafka.bootstrapAddress***REMOVED***")
    private String bootstrapServers;

    @Value("$***REMOVED***spring.kafka.consumer.group-id***REMOVED***")
    private String groupId;

    @Value("$***REMOVED***spring.kafka.consumer.auto-offset-reset***REMOVED***")
    private String autoOffsetReset;

    // Producer 설정
    @Bean
    public Map<String, Object> producerConfigs() ***REMOVED***
        Map<String, Object> props = new HashMap<>();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class); // JSON 직렬화
        return props;
    ***REMOVED***

    @Bean
    public ProducerFactory<String, List<ProductResponseDto>> producerFactory() ***REMOVED***
        return new DefaultKafkaProducerFactory<>(producerConfigs());
    ***REMOVED***

    @Bean
    public KafkaTemplate<String, List<ProductResponseDto>> kafkaTemplate() ***REMOVED***
        return new KafkaTemplate<>(producerFactory());
    ***REMOVED***

    // Consumer 설정
    @Bean
    public Map<String, Object> consumerConfigs() ***REMOVED***
        Map<String, Object> props = new HashMap<>();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        props.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, autoOffsetReset);
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);

        // ErrorHandlingDeserializer 설정
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, ErrorHandlingDeserializer.class.getName());
        props.put(ErrorHandlingDeserializer.VALUE_DESERIALIZER_CLASS, JsonDeserializer.class.getName());
        props.put(JsonDeserializer.VALUE_DEFAULT_TYPE, "java.util.ArrayList"); // 제네릭 없이 설정
        props.put(JsonDeserializer.TRUSTED_PACKAGES, "*");
        return props;
    ***REMOVED***

    @Bean
    public ConsumerFactory<String, List> consumerFactory() ***REMOVED*** // 제네릭 없이 List 사용
        return new DefaultKafkaConsumerFactory<>(consumerConfigs());
    ***REMOVED***

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, List> kafkaListenerContainerFactory() ***REMOVED*** // 제네릭 없이 List 사용
        ConcurrentKafkaListenerContainerFactory<String, List> factory =
                new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        return factory;
    ***REMOVED***
***REMOVED***
