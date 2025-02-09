package com.ssafy.product.global.util;

import weddy.commonlib.dto.response.ProductResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ProducerUtil<K, V> {
    @Value("${producers.cart-response-topic.name}")
    private String sendCartListTopic;

    private final KafkaTemplate<K, List<ProductResponseDto>> kafkaTemplate;

    /**
     * 장바구니 상품 리스트 전송 토픽
     *
     * @param value 메시지 값
     */
    public void sendCartListTopic(K key, List<ProductResponseDto> value) {
        kafkaTemplate.send(sendCartListTopic, key, value);
    }
}