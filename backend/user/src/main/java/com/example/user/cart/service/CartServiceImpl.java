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

    public CartResponseDto getCart(UserEntity userEntity)***REMOVED***
        return null;
    ***REMOVED***
***REMOVED***
