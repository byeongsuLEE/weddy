package com.example.user.cart.controller;

import com.example.user.cart.dto.response.CartResponseDto;
import com.example.user.cart.service.CartService;
import com.example.user.common.dto.ApiResponse;
import com.example.user.user.entity.UserEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users/cart")
public class CartController ***REMOVED***


    private final CartService cartService;

    public CartController(CartService cartService) ***REMOVED***
        this.cartService = cartService;
    ***REMOVED***

    @PostMapping("/add")
    public ResponseEntity<ApiResponse<String>> addCart(@RequestBody Long productId, @AuthenticationPrincipal UserEntity user)***REMOVED***
        cartService.addCart(productId,user);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success("카트 추가 성공"));
    ***REMOVED***

    @GetMapping
    public ResponseEntity<ApiResponse<CartResponseDto>> getCart(@AuthenticationPrincipal UserEntity user)***REMOVED***
        CartResponseDto cartResponseDto = cartService.getCart(user);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(cartResponseDto,"카트 조회 성공"));
    ***REMOVED***

    @DeleteMapping
    public ResponseEntity<ApiResponse<String>> deleteCart(@RequestBody Long productId,@AuthenticationPrincipal UserEntity user)***REMOVED***
        cartService.removeCart(productId,user);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success("카트 제거 성공"));
    ***REMOVED***

***REMOVED***
