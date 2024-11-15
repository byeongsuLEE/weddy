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
public class CartServiceImpl implements CartService ***REMOVED***


    private final CartRepository cartRepository;
    private final KafkaTemplate<String, Object> kafkaTemplate;
    private final KafkaTopicProperties kafkaTopicProperties;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final UserRepository userRepository;
    private ConcurrentHashMap<String, CompletableFuture<List<CartProductDto>>> pendingRequests = new ConcurrentHashMap<>();


    public CartServiceImpl(CartRepository cartRepository, KafkaTemplate<String, Object> kafkaTemplate, KafkaTopicProperties kafkaTopicProperties, UserRepository userRepository) ***REMOVED***
        this.cartRepository = cartRepository;
        this.kafkaTemplate = kafkaTemplate;
        this.kafkaTopicProperties = kafkaTopicProperties;
        this.userRepository = userRepository;
    ***REMOVED***

    public void addCart(Long productId, UserEntity userEntity)***REMOVED***
        if (cartRepository.existsByCoupleCodeAndProductId(userEntity.getCoupleCode(), productId)) ***REMOVED***
            throw new ConflictItemsException(ErrorCode.ITEM_NOT_FOUND);
        ***REMOVED***
        CartEntity cartEntity = CartEntity.builder()
                .productId(productId)
                .coupleCode(userEntity.getCoupleCode())
                .build();

        cartRepository.save(cartEntity);
    ***REMOVED***

    public void removeCart(Long productId, UserEntity userEntity)***REMOVED***
        List<CartEntity> cartEntities = cartRepository.findByCoupleCode(userEntity.getCoupleCode());

        if (cartEntities != null && !cartEntities.isEmpty()) ***REMOVED***
            int deletedCount = cartRepository.deleteByUserIdAndProductId(productId,userEntity.getCoupleCode());

            if (deletedCount == 0) ***REMOVED***
                // 삭제가 실패했을 때 예외 던지기
                throw new CartNotFoundException(ErrorCode.ITEM_NOT_FOUND);
            ***REMOVED***
        ***REMOVED*** else ***REMOVED***
            throw new CartNotFoundException(ErrorCode.ITEM_NOT_FOUND);
        ***REMOVED***
    ***REMOVED***

//    public List<CartProductDto> getCart(UserEntity userEntity) ***REMOVED***
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
//        try ***REMOVED***
//            jsonRequest = objectMapper.writeValueAsString(productIds);
//        ***REMOVED*** catch (JsonProcessingException e) ***REMOVED***
//            log.error(e.getMessage());
//            throw new RuntimeException(e);
//        ***REMOVED***
//        log.info("로그 출력:***REMOVED******REMOVED***",jsonRequest);
//        String topic = kafkaTopicProperties.getCartRequestTopic().getName();
//        kafkaTemplate.send(topic, correlationId, jsonRequest);
//
//        // 6. 응답 대기: 5초 동안 응답을 기다립니다.
//        List<CartProductDto> response = null;
//        try ***REMOVED***
//            response = future.get(5, TimeUnit.SECONDS);
//        ***REMOVED*** catch (InterruptedException e) ***REMOVED***
//            throw new RuntimeException(e);
//        ***REMOVED*** catch (ExecutionException e) ***REMOVED***
//            throw new RuntimeException(e);
//        ***REMOVED*** catch (TimeoutException e) ***REMOVED***
//            throw new RuntimeException(e);
//        ***REMOVED***
//
//        // 7. 응답을 받은 후 요청 목록에서 제거하고 응답을 반환합니다.
//        pendingRequests.remove(correlationId);
//        return response;
//    ***REMOVED***
//
//
//
//
//    @KafkaListener(topics = "#***REMOVED***@kafkaTopicProperties.cartResponseTopic.name***REMOVED***", groupId = "cart-response-group")
//    public void onResponseReceived(
//            @Header(KafkaHeaders.RECEIVED_KEY) String correlationId, // Key를 Header로 받아옴
//            String jsonResponse
//    ) ***REMOVED***
//        log.info("correlationId : ***REMOVED******REMOVED***, jsonResponse : ***REMOVED******REMOVED***", correlationId, jsonResponse);
//        CompletableFuture<List<CartProductDto>> future = pendingRequests.get(correlationId);
//        log.info("들어옴?***REMOVED******REMOVED***", future == null ? "no" : "yes");
//
//        if (future != null) ***REMOVED***
//            try ***REMOVED***
//                // JSON 문자열을 List<CartResponseDto>로 변환
//                List<CartProductDto> responseList = objectMapper.readValue(
//                        jsonResponse,
//                        new TypeReference<List<CartProductDto>>() ***REMOVED******REMOVED*** // List 타입을 명확하게 지정
//                );
//                log.info("받은 로그 출력***REMOVED******REMOVED***", responseList);
//                future.complete(responseList);
//            ***REMOVED*** catch (Exception e) ***REMOVED***
//                future.completeExceptionally(e);
//            ***REMOVED***
//        ***REMOVED***
//    ***REMOVED***

    public List<CartProductDto> getCart(UserEntity userEntity) ***REMOVED***
        log.info("Fetching cart items for user with coupleCode ***REMOVED******REMOVED***", userEntity.getCoupleCode());

        // 1. 상품 ID 목록을 가져옵니다.
        List<Long> productIds = cartRepository.findAllProductIdByUserId(userEntity.getCoupleCode());
        log.info("Product IDs for user with coupleCode ***REMOVED******REMOVED***: ***REMOVED******REMOVED***", userEntity.getCoupleCode(), productIds);

        // 2. 고유한 요청 ID를 생성합니다.
        String correlationId = "cart-request-" + userEntity.getCoupleCode();

        // 3. CompletableFuture 생성 및 예외 핸들링 준비
        CompletableFuture<List<CartProductDto>> future = new CompletableFuture<>();
        pendingRequests.put(correlationId, future);

        // 4. Kafka에 요청 전송
        try ***REMOVED***
            String jsonRequest = objectMapper.writeValueAsString(productIds);
            log.info("Sending Kafka request with correlationId: ***REMOVED******REMOVED***, payload: ***REMOVED******REMOVED***", correlationId, jsonRequest);
            kafkaTemplate.send(kafkaTopicProperties.getCartRequestTopic().getName(), correlationId, jsonRequest);
        ***REMOVED*** catch (JsonProcessingException e) ***REMOVED***
            log.error("Failed to serialize product IDs to JSON for correlationId ***REMOVED******REMOVED***: ***REMOVED******REMOVED***", correlationId, e.getMessage(), e);
            throw new RuntimeException("Failed to serialize product IDs to JSON", e);
        ***REMOVED***

        // 5. 응답 대기 및 타임아웃 예외 처리
        List<CartProductDto> response;
        try ***REMOVED***
            response = future.orTimeout(5, TimeUnit.SECONDS)
                    .exceptionally(e -> ***REMOVED***
                        log.error("Error occurred while waiting for Kafka response for correlationId ***REMOVED******REMOVED***: ***REMOVED******REMOVED***", correlationId, e.getMessage());
                        throw new RuntimeException("Timeout while waiting for Kafka response", e);
                    ***REMOVED***)
                    .get();
            log.info("Received Kafka response successfully for correlationId: ***REMOVED******REMOVED***", correlationId);
        ***REMOVED*** catch (Exception e) ***REMOVED***
            log.error("Failed to receive response for correlationId ***REMOVED******REMOVED***: ***REMOVED******REMOVED***", correlationId, e.getMessage(), e);
            throw new RuntimeException("Failed to receive response for cart items", e);
        ***REMOVED*** finally ***REMOVED***
            pendingRequests.remove(correlationId); // 요청 목록에서 제거하여 메모리 누수 방지
        ***REMOVED***

        return response;
    ***REMOVED***

    @KafkaListener(topics = "#***REMOVED***@kafkaTopicProperties.cartResponseTopic.name***REMOVED***", groupId = "cart-response-group")
    public void onResponseReceived(
            @Header(KafkaHeaders.RECEIVED_KEY) String correlationId,
            String jsonResponse
    ) ***REMOVED***
        log.info("Received Kafka response with correlationId: ***REMOVED******REMOVED***, jsonResponse: ***REMOVED******REMOVED***", correlationId, jsonResponse);

        CompletableFuture<List<CartProductDto>> future = pendingRequests.get(correlationId);
        if (future != null) ***REMOVED***
            try ***REMOVED***
                // JSON 문자열을 List<CartProductDto>로 변환
                List<CartProductDto> responseList = objectMapper.readValue(
                        jsonResponse,
                        new TypeReference<List<CartProductDto>>() ***REMOVED******REMOVED***
                );
                log.info("Parsed response list for correlationId ***REMOVED******REMOVED***: ***REMOVED******REMOVED***", correlationId, responseList);
                future.complete(responseList);
            ***REMOVED*** catch (JsonProcessingException e) ***REMOVED***
                log.error("Failed to parse JSON response for correlationId ***REMOVED******REMOVED***: ***REMOVED******REMOVED***", correlationId, e.getMessage(), e);
                future.completeExceptionally(new RuntimeException("Failed to parse JSON response", e));
            ***REMOVED***
        ***REMOVED*** else ***REMOVED***
            log.warn("No pending request found for correlationId: ***REMOVED******REMOVED***", correlationId);
        ***REMOVED***
    ***REMOVED***


***REMOVED***

