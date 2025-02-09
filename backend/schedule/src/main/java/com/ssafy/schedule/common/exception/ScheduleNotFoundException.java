package com.ssafy.schedule.common.exception;

import com.ssafy.schedule.common.response.ErrorCode;
import lombok.Getter;

@Getter
public class ScheduleNotFoundException extends RuntimeException {
    private final ErrorCode errorCode;


    public ScheduleNotFoundException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
