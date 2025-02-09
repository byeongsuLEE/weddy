package com.ssafy.product.product.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;

import java.time.LocalDate;

@Builder
public record ReviewResponseDto(Long id,
                                Long userId,
                                ProductResponseDto product,
                                String content,
                                @JsonFormat(pattern = "yyyy-MM-dd") LocalDate date,
                                Double score) {
}
