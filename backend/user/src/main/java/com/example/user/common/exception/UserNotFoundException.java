package com.example.user.common.exception;

import com.example.user.common.dto.ErrorCode;
import lombok.Getter;

@Getter
public class UserNotFoundException extends RuntimeException {

    private final ErrorCode errorCode;
    public UserNotFoundException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
