package com.example.user.sketch.dto.request;

import lombok.Builder;

@Builder
public record SketchRequestDto(String studio,
                               String dressName) {
}
