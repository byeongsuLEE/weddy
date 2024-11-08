package com.example.user.cart.dto.response;

import com.example.user.cart.entity.CartEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartResponseDto ***REMOVED***
    Long id;
    Long productId;
    Long userId;

    public CartResponseDto(CartEntity cartEntity) ***REMOVED***
        this.id = cartEntity.getId();
        this.productId = cartEntity.getProductId();
        this.userId = cartEntity.getUserId();
    ***REMOVED***
***REMOVED***
