package com.example.user.sketch.dto.response;

import lombok.Builder;

@Builder
public record SketchResponseDto(Long id,
                                String image,
                                String studio,
                                String dressName,
                                Long user) {
}
