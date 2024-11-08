package com.example.user.cart.service;

import com.example.user.cart.dto.response.CartResponseDto;
import com.example.user.cart.entity.CartEntity;
import com.example.user.cart.repository.CartRepository;
import com.example.user.user.entity.UserEntity;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.*;

import static com.example.user.cart.constant.CartKafkaTopic.REQUEST_TOPIC;
import static com.example.user.cart.constant.CartKafkaTopic.RESPONSE_TOPIC;

@Service
public class CartServiceImpl implements CartService ***REMOVED***


    private final CartRepository cartRepository;
    private final KafkaTemplate<String, CartResponseDto> kafkaTemplate;
    private ConcurrentHashMap<String, CompletableFuture<String>> pendingRequests = new ConcurrentHashMap<>();

    public CartServiceImpl(CartRepository cartRepository, KafkaTemplate<String, CartResponseDto> kafkaTemplate) ***REMOVED***
        this.cartRepository = cartRepository;
        this.kafkaTemplate = kafkaTemplate;
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

    public CartResponseDto getCart(UserEntity userEntity) ***REMOVED***
        // 고유한 Correlation ID 생성

        try ***REMOVED***
            Long productId = cartRepository.findCartIdByUserId(userEntity.getId());
            String correlationId = "cart-request-" + productId;
            CompletableFuture<CartResponseDto> future = new CompletableFuture<>();
            pendingRequests.put(correlationId, future);

            // 카프카에 요청 전송
            kafkaTemplate.send(REQUEST_TOPIC, correlationId, productId.toString());

            // 응답 대기 (5초 타임아웃 설정)
            CartResponseDto response = future.get(5, TimeUnit.SECONDS);
            pendingRequests.remove(correlationId); // Map에서 제거

            return response;
        ***REMOVED*** catch (InterruptedException e) ***REMOVED***
            Thread.currentThread().interrupt();
            System.out.println("Thread was interrupted: " + e.getMessage());
        ***REMOVED*** catch (ExecutionException e) ***REMOVED***
            System.out.println("Execution error occurred: " + e.getMessage());
        ***REMOVED*** catch (TimeoutException e) ***REMOVED***
            System.out.println("Request timed out: " + e.getMessage());
        ***REMOVED***
    ***REMOVED***

    // 응답 수신용 KafkaListener
    @KafkaListener(topics = RESPONSE_TOPIC, groupId = "cart-response-group")
    public void onResponseReceived(String correlationId, String jsonResponse) ***REMOVED***
        CompletableFuture<String> future = pendingRequests.get(correlationId);
        if (future != null) ***REMOVED***
            future.complete(jsonResponse); // 응답 데이터 설정
        ***REMOVED***
    ***REMOVED***
***REMOVED***
