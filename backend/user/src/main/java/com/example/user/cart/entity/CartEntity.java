package com.example.user.cart.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
@Table(name = "Cart")
public class CartEntity ***REMOVED***
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long productId;

    private Long userId;

    @Builder
    public CartEntity(Long id, Long productId, Long userId) ***REMOVED***
        this.id = id;
        this.productId = productId;
        this.userId = userId;
    ***REMOVED***
***REMOVED***
