package com.example.user.common.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@Builder
public class APIResponse<T> ***REMOVED***
    private int status;  // HTTP 상태 코드
    private T data;      // 실제 응답 데이터
    private String message;
***REMOVED***
