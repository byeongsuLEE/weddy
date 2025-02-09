package com.ssafy.product.product.dto.request;

import jakarta.validation.constraints.Pattern;
import lombok.Builder;

@Builder
public record VenderRequestDto(String name,
                               String businessNumber,
                               @Pattern(regexp = "^01(?:0|1|[6-9])(?:\\d{3}|\\d{4})\\d{4}$",
                                        message = "전화번호 형식은 01012345678 입니다.")
                               String phone,
                               String address) {
}
