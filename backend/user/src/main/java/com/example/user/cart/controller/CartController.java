package com.example.user.cart.controller;

import com.example.user.cart.dto.response.CartResponseDTO;
import com.example.user.cart.service.CartService;
import com.example.user.common.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<ApiResponse<CartResponseDTO>> addCart(@RequestBody Long id)***REMOVED***
        CartResponseDTO cartResponseDTO = cartService.addCart(id);
        return null;
    ***REMOVED***
***REMOVED***
