package com.example.user.common.exception;

import com.example.user.common.dto.ErrorCode;
import lombok.Getter;

@Getter
public class ContractNotFoundException extends RuntimeException {

    private final ErrorCode errorCode;
    public ContractNotFoundException(ErrorCode errorCode ){
        super(errorCode.getMessage()); // 에러 코드의 메시지를 기본 메시지로 설정
        this.errorCode = errorCode;
    }
}
