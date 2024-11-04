package com.example.user.contract.global.util.exception;

import com.example.user.contract.global.util.response.ErrorCode;
import lombok.Getter;

@Getter
public class PaymentNotValidateException extends RuntimeException ***REMOVED***

    private final ErrorCode errorCode;
    public PaymentNotValidateException(ErrorCode errorCode )***REMOVED***
        super(errorCode.getMessage()); // 에러 코드의 메시지를 기본 메시지로 설정
        this.errorCode = errorCode;
    ***REMOVED***
***REMOVED***
