package com.ssafy.schedule.domain.event;


import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
