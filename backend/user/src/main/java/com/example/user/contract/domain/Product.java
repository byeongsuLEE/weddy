package com.example.user.contract.domain;

import com.example.user.contract.constant.ProductType;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 작성자   : 이병수
 * 작성날짜 : 2024-10-30
 * 설명    :
 */

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Embeddable
public class Product {
    private Long productId;
    private String productContent;
    private String productName;
    private ProductType type;
}
