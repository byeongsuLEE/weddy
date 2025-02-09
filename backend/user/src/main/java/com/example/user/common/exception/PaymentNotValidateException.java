package com.example.user.common.exception;

import com.example.user.common.dto.ErrorCode;
import lombok.Getter;

@Getter
public class PaymentNotValidateException extends RuntimeException {

    private final ErrorCode errorCode;
    public PaymentNotValidateException(ErrorCode errorCode ){
        super(errorCode.getMessage()); // 에러 코드의 메시지를 기본 메시지로 설정
        this.errorCode = errorCode;
    }
}
