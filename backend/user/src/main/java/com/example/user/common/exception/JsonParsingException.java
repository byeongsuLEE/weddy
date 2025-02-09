package com.example.user.common.exception;

import com.example.user.common.dto.ErrorCode;
import lombok.Getter;

@Getter
public class JsonParsingException extends RuntimeException {

    private final ErrorCode errorCode;
    public JsonParsingException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
