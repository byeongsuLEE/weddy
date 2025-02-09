package com.ssafy.schedule.common.exception;

import com.ssafy.schedule.common.response.ErrorCode;
import lombok.Getter;

@Getter
public class UserNotFoundException extends RuntimeException {
    private final ErrorCode errorCode;

    public UserNotFoundException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

}
