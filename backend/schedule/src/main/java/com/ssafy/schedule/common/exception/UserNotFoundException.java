package com.ssafy.schedule.common.exception;

import com.ssafy.schedule.common.response.ErrorCode;
import lombok.Getter;

@Getter
public class UserNotFoundException extends RuntimeException ***REMOVED***
    private final ErrorCode errorCode;

    public UserNotFoundException(ErrorCode errorCode) ***REMOVED***
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    ***REMOVED***

***REMOVED***
