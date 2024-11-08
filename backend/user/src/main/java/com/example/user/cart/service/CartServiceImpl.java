package com.example.user.cart.service;

import com.example.user.cart.dto.response.CartResponseDto;
import com.example.user.cart.entity.CartEntity;
import com.example.user.cart.repository.CartRepository;
import com.example.user.user.entity.UserEntity;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService ***REMOVED***

    private final CartRepository cartRepository;

    public CartServiceImpl(CartRepository cartRepository) ***REMOVED***
        this.cartRepository = cartRepository;
    ***REMOVED***

    public CartResponseDto addCart(Long productId, UserEntity userEntity)***REMOVED***
        CartEntity cartEntity = CartEntity.builder()
                .productId(productId)
                .userId(userEntity.getId())
                .build();

        cartRepository.save(cartEntity);
        return new CartResponseDto(cartEntity);
    ***REMOVED***
***REMOVED***
