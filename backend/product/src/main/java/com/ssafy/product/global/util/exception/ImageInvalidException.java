package com.ssafy.product.global.util.exception;

import com.ssafy.product.global.util.response.ErrorCode;
import lombok.Getter;

@Getter
public class ImageInvalidException extends RuntimeException {
    private final ErrorCode errorCode;

    public ImageInvalidException(ErrorCode errorCode) {
        super(errorCode.getMessage()); // 에러 코드의 메시지를 기본 메시지로 설정
        this.errorCode = errorCode;
    }
}
