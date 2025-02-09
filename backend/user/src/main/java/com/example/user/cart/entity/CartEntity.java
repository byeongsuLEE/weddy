package com.example.user.cart.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "Cart")
@NoArgsConstructor
public class CartEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String coupleCode;

    private Long productId;

    private Long userId;

    @Builder
    public CartEntity(Long id, String coupleCode, Long productId, Long userId) {
        this.id = id;
        this.coupleCode = coupleCode;
        this.productId = productId;
        this.userId = userId;
    }
}
