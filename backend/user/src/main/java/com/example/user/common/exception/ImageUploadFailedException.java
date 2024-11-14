package com.example.user.common.exception;

import com.example.user.common.dto.ErrorCode;
import lombok.Getter;

@Getter
public class ImageUploadFailedException extends RuntimeException ***REMOVED***
    private final ErrorCode errorCode;

    public ImageUploadFailedException(ErrorCode errorCode)***REMOVED***
        super(errorCode.getMessage()); // 에러 코드의 메시지를 기본 메시지로 설정
        this.errorCode = errorCode;
    ***REMOVED***
***REMOVED***
