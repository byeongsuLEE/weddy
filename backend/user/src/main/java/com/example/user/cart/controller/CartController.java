package com.example.user.cart.controller;

import com.example.user.cart.dto.response.CartResponseDto;
import com.example.user.cart.service.CartService;
import com.example.user.common.dto.ApiResponse;
import com.example.user.user.entity.UserEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users/cart")
public class CartController ***REMOVED***


    private final CartService cartService;

    public CartController(CartService cartService) ***REMOVED***
        this.cartService = cartService;
    ***REMOVED***

    @PostMapping("/add")
    public ResponseEntity<ApiResponse<CartResponseDto>> addCart(@RequestBody Long productId, @AuthenticationPrincipal UserEntity user)***REMOVED***
        CartResponseDto cartResponseDTO = cartService.addCart(productId,user);
        return null;
    ***REMOVED***


***REMOVED***
