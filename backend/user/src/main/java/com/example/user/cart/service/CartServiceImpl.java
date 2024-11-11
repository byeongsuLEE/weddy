package com.example.user.cart.service;

import com.example.user.cart.dto.response.CartProductDto;
import com.example.user.cart.dto.response.CartResponseDto;
import com.example.user.cart.entity.CartEntity;
import com.example.user.cart.repository.CartRepository;
import com.example.user.common.config.KafkaTopicProperties;
import com.example.user.user.entity.UserEntity;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.*;

@Service
public class CartServiceImpl implements CartService ***REMOVED***


    private final CartRepository cartRepository;
    private final KafkaTemplate<String, String> kafkaTemplate;
    private final KafkaTopicProperties kafkaTopicProperties;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private ConcurrentHashMap<String, CompletableFuture<List<CartProductDto>>> pendingRequests = new ConcurrentHashMap<>();


    public CartServiceImpl(CartRepository cartRepository, KafkaTemplate<String, String> kafkaTemplate, KafkaTopicProperties kafkaTopicProperties) ***REMOVED***
        this.cartRepository = cartRepository;
        this.kafkaTemplate = kafkaTemplate;
        this.kafkaTopicProperties = kafkaTopicProperties;
    ***REMOVED***

    public void addCart(Long productId, UserEntity userEntity)***REMOVED***
        CartEntity cartEntity = CartEntity.builder()
                .productId(productId)
                .userId(userEntity.getId())
                .build();

        cartRepository.save(cartEntity);
    ***REMOVED***

    public void removeCart(Long productId, UserEntity userEntity)***REMOVED***
        CartEntity cartEntity = cartRepository.findById(productId).orElse(null);
        cartRepository.delete(cartEntity);
    ***REMOVED***

    public List<CartProductDto> getCart(UserEntity userEntity) ***REMOVED***
        try ***REMOVED***
            // 1. 상품 ID 목록을 가져옵니다.
            List<Long> productIds = cartRepository.findCartIdsByUserId(userEntity.getId());

            // 2. 고유한 요청 ID를 생성합니다. 이를 통해 요청과 응답을 매칭할 수 있습니다.
            String correlationId = "cart-request-" + userEntity.getId();

            // 3. CompletableFuture 생성: 나중에 응답이 올 때까지 기다릴 수 있게 준비합니다.
            CompletableFuture<List<CartProductDto>> future = new CompletableFuture<>();

            // 4. 이 요청을 추적할 수 있도록 pendingRequests에 저장합니다.
            pendingRequests.put(correlationId, future);

            // 5. Kafka에 요청 전송 (productIds 목록을 JSON으로 직렬화하여 전송)
            String jsonRequest = objectMapper.writeValueAsString(productIds);
            String topic = kafkaTopicProperties.getCartRequestTopic().getName();
            kafkaTemplate.send(topic, correlationId, jsonRequest);

            // 6. 응답 대기: 5초 동안 응답을 기다립니다.
            List<CartProductDto> response = future.get(5, TimeUnit.SECONDS);

            // 7. 응답을 받은 후 요청 목록에서 제거하고 응답을 반환합니다.
            pendingRequests.remove(correlationId);
            return response;

        ***REMOVED*** catch (Exception e) ***REMOVED***
            System.out.println("에러가 발생했습니다: " + e.getMessage());
        ***REMOVED***
        return null; // 오류 발생 시 null 반환
    ***REMOVED***


    @KafkaListener(topics = "#***REMOVED***@kafkaTopicProperties.cartResponseTopic.name***REMOVED***", groupId = "cart-response-group")
    public void onResponseReceived(String correlationId, String jsonResponse) ***REMOVED***
        CompletableFuture<List<CartProductDto>> future = pendingRequests.get(correlationId);
        if (future != null) ***REMOVED***
            try ***REMOVED***
                // JSON 문자열을 List<CartResponseDto>로 변환
                List<CartProductDto> responseList = objectMapper.readValue(
                        jsonResponse,
                        new TypeReference<List<CartProductDto>>() ***REMOVED******REMOVED*** // List 타입을 명확하게 지정
                );
                future.complete(responseList);
            ***REMOVED*** catch (Exception e) ***REMOVED***
                future.completeExceptionally(e);
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***

***REMOVED***

