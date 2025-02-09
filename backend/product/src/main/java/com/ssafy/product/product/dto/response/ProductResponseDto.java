package com.ssafy.product.product.dto.response;

import com.ssafy.product.product.constant.ProductType;
import lombok.Builder;

import java.util.List;

@Builder
public record ProductResponseDto(Long id,
                                 String name,
                                 ProductType type,
                                 int price,
                                 String address,
                                 List<ProductImageResponseDto> images) {
}
