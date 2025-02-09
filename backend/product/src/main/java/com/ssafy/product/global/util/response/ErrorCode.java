package com.ssafy.product.global.util.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public enum ErrorCode {
    PRODUCT_NOT_FOUND_EXCEPTION(HttpStatus.NOT_FOUND, "상품을 찾을 수 없습니다."),
    IMAGE_INVALID_EXCEPTION(HttpStatus.BAD_REQUEST,"이미지는 필수 입력 값 입니다."),
    FILE_TOO_LARGE(HttpStatus.PAYLOAD_TOO_LARGE,"파일의 최대용량이 초과되었습니다."),
    METHOD_NOT_ALLOWED(HttpStatus.METHOD_NOT_ALLOWED,"HTTP METHOD를 확인해주세요.");

    private HttpStatus status;
    private String message;
}
