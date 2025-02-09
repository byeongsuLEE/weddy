package com.ssafy.product.product.dto.response;

import lombok.Builder;

@Builder
public record VenderResponseDto(Long id,
                                String name,
                                String businessNumber,
                                String phone,
                                String address,
                                String image) {
}
