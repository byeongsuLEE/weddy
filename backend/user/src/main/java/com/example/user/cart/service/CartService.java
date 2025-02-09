package com.example.user.cart.service;

import com.example.user.cart.dto.response.CartProductDto;
import com.example.user.cart.dto.response.CartResponseDto;
import com.example.user.user.entity.UserEntity;

import java.util.List;

public interface CartService{
    void addCart(Long productId, UserEntity userEntity);
    List<CartProductDto> getCart(UserEntity userEntity);
    void removeCart(Long productId,UserEntity userEntity);
}
