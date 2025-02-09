package com.example.user.cart.service;

import com.example.user.cart.dto.response.CartProductDto;
import com.example.user.cart.entity.CartEntity;
import com.example.user.cart.repository.CartRepository;
import com.example.user.common.config.KafkaTopicProperties;
import com.example.user.common.dto.ErrorCode;
import com.example.user.common.exception.CartNotFoundException;
import com.example.user.common.exception.ConflictItemsException;
import com.example.user.user.entity.UserEntity;
import com.example.user.user.repository.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.*;

@Service
@Slf4j
public class CartServiceImpl implements CartService {


    private final CartRepository cartRepository;
    private final KafkaTemplate<String, Object> kafkaTemplate;
    private final KafkaTopicProperties kafkaTopicProperties;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final UserRepository userRepository;
    private ConcurrentHashMap<String, CompletableFuture<List<CartProductDto>>> pendingRequests = new ConcurrentHashMap<>();


    public CartServiceImpl(CartRepository cartRepository, KafkaTemplate<String, Object> kafkaTemplate, KafkaTopicProperties kafkaTopicProperties, UserRepository userRepository) {
        this.cartRepository = cartRepository;
        this.kafkaTemplate = kafkaTemplate;
        this.kafkaTopicProperties = kafkaTopicProperties;
        this.userRepository = userRepository;
    }

    public void addCart(Long productId, UserEntity userEntity){
        if (cartRepository.existsByCoupleCodeAndProductId(userEntity.getCoupleCode(), productId)) {
            throw new ConflictItemsException(ErrorCode.ITEM_NOT_FOUND);
        }
        CartEntity cartEntity = CartEntity.builder()
                .productId(productId)
                .coupleCode(userEntity.getCoupleCode())
                .build();

        cartRepository.save(cartEntity);
    }

    public void removeCart(Long productId, UserEntity userEntity){
        List<CartEntity> cartEntities = cartRepository.findByCoupleCode(userEntity.getCoupleCode());

        if (cartEntities != null && !cartEntities.isEmpty()) {
            int deletedCount = cartRepository.deleteByUserIdAndProductId(productId,userEntity.getCoupleCode());

            if (deletedCount == 0) {
                // 삭제가 실패했을 때 예외 던지기
                throw new CartNotFoundException(ErrorCode.ITEM_NOT_FOUND);
            }
        } else {
            throw new CartNotFoundException(ErrorCode.ITEM_NOT_FOUND);
        }
    }

//    public List<CartProductDto> getCart(UserEntity userEntity) {
//        // 1. 상품 ID 목록을 가져옵니다.
//        List<Long> productIds = cartRepository.findAllProductIdByUserId(userEntity.getCoupleCode());
//
//        // 2. 고유한 요청 ID를 생성합니다. 이를 통해 요청과 응답을 매칭할 수 있습니다.
//        String correlationId = "cart-request-" + userEntity.getCoupleCode();
//
//        // 3. CompletableFuture 생성: 나중에 응답이 올 때까지 기다릴 수 있게 준비합니다.
//        CompletableFuture<List<CartProductDto>> future = new CompletableFuture<>();
//
//        // 4. 이 요청을 추적할 수 있도록 pendingRequests에 저장합니다.
//        pendingRequests.put(correlationId, future);
//
//        // 5. Kafka에 요청 전송 (productIds 목록을 JSON으로 직렬화하여 전송)
//        String jsonRequest = null;
//        try {
//            jsonRequest = objectMapper.writeValueAsString(productIds);
//        } catch (JsonProcessingException e) {
//            log.error(e.getMessage());
//            throw new RuntimeException(e);
//        }
//        log.info("로그 출력:{}",jsonRequest);
//        String topic = kafkaTopicProperties.getCartRequestTopic().getName();
//        kafkaTemplate.send(topic, correlationId, jsonRequest);
//
//        // 6. 응답 대기: 5초 동안 응답을 기다립니다.
//        List<CartProductDto> response = null;
//        try {
//            response = future.get(5, TimeUnit.SECONDS);
//        } catch (InterruptedException e) {
//            throw new RuntimeException(e);
//        } catch (ExecutionException e) {
//            throw new RuntimeException(e);
//        } catch (TimeoutException e) {
//            throw new RuntimeException(e);
//        }
//
//        // 7. 응답을 받은 후 요청 목록에서 제거하고 응답을 반환합니다.
//        pendingRequests.remove(correlationId);
//        return response;
//    }
//
//
//
//
//    @KafkaListener(topics = "#{@kafkaTopicProperties.cartResponseTopic.name}", groupId = "cart-response-group")
//    public void onResponseReceived(
//            @Header(KafkaHeaders.RECEIVED_KEY) String correlationId, // Key를 Header로 받아옴
//            String jsonResponse
//    ) {
//        log.info("correlationId : {}, jsonResponse : {}", correlationId, jsonResponse);
//        CompletableFuture<List<CartProductDto>> future = pendingRequests.get(correlationId);
//        log.info("들어옴?{}", future == null ? "no" : "yes");
//
//        if (future != null) {
//            try {
//                // JSON 문자열을 List<CartResponseDto>로 변환
//                List<CartProductDto> responseList = objectMapper.readValue(
//                        jsonResponse,
//                        new TypeReference<List<CartProductDto>>() {} // List 타입을 명확하게 지정
//                );
//                log.info("받은 로그 출력{}", responseList);
//                future.complete(responseList);
//            } catch (Exception e) {
//                future.completeExceptionally(e);
//            }
//        }
//    }

    public List<CartProductDto> getCart(UserEntity userEntity) {
        log.info("Fetching cart items for user with coupleCode {}", userEntity.getCoupleCode());

        // 1. 상품 ID 목록을 가져옵니다.
        List<Long> productIds = cartRepository.findAllProductIdByUserId(userEntity.getCoupleCode());
        log.info("Product IDs for user with coupleCode {}: {}", userEntity.getCoupleCode(), productIds);

        // 2. 고유한 요청 ID를 생성합니다.
        String correlationId = "cart-request-" + userEntity.getCoupleCode();

        // 3. CompletableFuture 생성 및 예외 핸들링 준비
        CompletableFuture<List<CartProductDto>> future = new CompletableFuture<>();
        pendingRequests.put(correlationId, future);

        // 4. Kafka에 요청 전송
        try {
            String jsonRequest = objectMapper.writeValueAsString(productIds);
            log.info("Sending Kafka request with correlationId: {}, payload: {}", correlationId, jsonRequest);
            kafkaTemplate.send(kafkaTopicProperties.getCartRequestTopic().getName(), correlationId, jsonRequest);
        } catch (JsonProcessingException e) {
            log.error("Failed to serialize product IDs to JSON for correlationId {}: {}", correlationId, e.getMessage(), e);
            throw new RuntimeException("Failed to serialize product IDs to JSON", e);
        }

        // 5. 응답 대기 및 타임아웃 예외 처리
        List<CartProductDto> response;
        try {
            response = future.orTimeout(5, TimeUnit.SECONDS)
                    .exceptionally(e -> {
                        log.error("Error occurred while waiting for Kafka response for correlationId {}: {}", correlationId, e.getMessage());
                        throw new RuntimeException("Timeout while waiting for Kafka response", e);
                    })
                    .get();
            log.info("Received Kafka response successfully for correlationId: {}", correlationId);
        } catch (Exception e) {
            log.error("Failed to receive response for correlationId {}: {}", correlationId, e.getMessage(), e);
            throw new RuntimeException("Failed to receive response for cart items", e);
        } finally {
            pendingRequests.remove(correlationId); // 요청 목록에서 제거하여 메모리 누수 방지
        }

        return response;
    }

    @KafkaListener(topics = "#{@kafkaTopicProperties.cartResponseTopic.name}", groupId = "cart-response-group")
    public void onResponseReceived(
            @Header(KafkaHeaders.RECEIVED_KEY) String correlationId,
            String jsonResponse
    ) {
        log.info("Received Kafka response with correlationId: {}, jsonResponse: {}", correlationId, jsonResponse);

        CompletableFuture<List<CartProductDto>> future = pendingRequests.get(correlationId);
        if (future != null) {
            try {
                // JSON 문자열을 List<CartProductDto>로 변환
                List<CartProductDto> responseList = objectMapper.readValue(
                        jsonResponse,
                        new TypeReference<List<CartProductDto>>() {}
                );
                log.info("Parsed response list for correlationId {}: {}", correlationId, responseList);
                future.complete(responseList);
            } catch (JsonProcessingException e) {
                log.error("Failed to parse JSON response for correlationId {}: {}", correlationId, e.getMessage(), e);
                future.completeExceptionally(new RuntimeException("Failed to parse JSON response", e));
            }
        } else {
            log.warn("No pending request found for correlationId: {}", correlationId);
        }
    }


}

