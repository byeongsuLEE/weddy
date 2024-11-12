package com.example.user.cart.service;

import com.example.user.cart.dto.response.CartProductDto;
import com.example.user.cart.dto.response.CartResponseDto;
import com.example.user.cart.entity.CartEntity;
import com.example.user.cart.repository.CartRepository;
import com.example.user.common.config.KafkaTopicProperties;
import com.example.user.user.entity.UserEntity;
import com.example.user.user.repository.UserRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.stereotype.Service;

import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;

import java.util.List;
import java.util.concurrent.*;

@Service
@Slf4j
public class CartServiceImpl implements CartService ***REMOVED***


    private final CartRepository cartRepository;
    private final KafkaTemplate<String, String> kafkaTemplate;
    private final KafkaTopicProperties kafkaTopicProperties;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final UserRepository userRepository;
    private ConcurrentHashMap<String, CompletableFuture<List<CartProductDto>>> pendingRequests = new ConcurrentHashMap<>();


    public CartServiceImpl(CartRepository cartRepository, KafkaTemplate<String, String> kafkaTemplate, KafkaTopicProperties kafkaTopicProperties, UserRepository userRepository) ***REMOVED***
        this.cartRepository = cartRepository;
        this.kafkaTemplate = kafkaTemplate;
        this.kafkaTopicProperties = kafkaTopicProperties;
        this.userRepository = userRepository;
    ***REMOVED***

    public void addCart(Long productId, UserEntity userEntity)***REMOVED***
        CartEntity cartEntity = CartEntity.builder()
                .productId(productId)
                .coupleCode(userEntity.getCoupleCode())
                .build();

        cartRepository.save(cartEntity);
    ***REMOVED***

    public void removeCart(Long productId, UserEntity userEntity)***REMOVED***
        List<CartEntity> cartEntities = cartRepository.findByCoupleCode(userEntity.getCoupleCode());
        if (cartEntities != null && !cartEntities.isEmpty()) ***REMOVED***
            cartRepository.deleteAll(cartEntities);
        ***REMOVED***
    ***REMOVED***

    public List<CartProductDto> getCart(UserEntity userEntity) ***REMOVED***
        try ***REMOVED***
            // 1. 상품 ID 목록을 가져옵니다.
            List<Long> productIds = cartRepository.findAllProductIdByUserId(userEntity.getCoupleCode());

            // 2. 고유한 요청 ID를 생성합니다. 이를 통해 요청과 응답을 매칭할 수 있습니다.
            String correlationId = "cart-request-" + userEntity.getCoupleCode();

            // 3. CompletableFuture 생성: 나중에 응답이 올 때까지 기다릴 수 있게 준비합니다.
            CompletableFuture<List<CartProductDto>> future = new CompletableFuture<>();

            // 4. 이 요청을 추적할 수 있도록 pendingRequests에 저장합니다.
            pendingRequests.put(correlationId, future);

            // 5. Kafka에 요청 전송 (productIds 목록을 JSON으로 직렬화하여 전송)
            String jsonRequest = objectMapper.writeValueAsString(productIds);
            log.info("로그 출력:***REMOVED******REMOVED***",jsonRequest);
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
    public void onResponseReceived(
            @Header(KafkaHeaders.RECEIVED_KEY) String correlationId, // Key를 Header로 받아옴
            String jsonResponse
    ) ***REMOVED***
        log.info("correlationId : ***REMOVED******REMOVED***, jsonResponse : ***REMOVED******REMOVED***", correlationId, jsonResponse);
        CompletableFuture<List<CartProductDto>> future = pendingRequests.get(correlationId);
        log.info("들어옴?***REMOVED******REMOVED***", future == null ? "no" : "yes");

        if (future != null) ***REMOVED***
            try ***REMOVED***
                // JSON 문자열을 List<CartResponseDto>로 변환
                List<CartProductDto> responseList = objectMapper.readValue(
                        jsonResponse,
                        new TypeReference<List<CartProductDto>>() ***REMOVED******REMOVED*** // List 타입을 명확하게 지정
                );
                log.info("받은 로그 출력***REMOVED******REMOVED***", responseList);
                future.complete(responseList);
            ***REMOVED*** catch (Exception e) ***REMOVED***
                future.completeExceptionally(e);
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***


***REMOVED***

