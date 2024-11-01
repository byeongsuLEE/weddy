package com.example.user.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@Builder
public class APIResponse<T> ***REMOVED***
    private int status;  // HTTP 상태 코드
    private T data;      // 실제 응답 데이터
***REMOVED***
//public APIResponse(int status, T data) ***REMOVED***
//    this.status = status;
//    this.data = data;
//***REMOVED***
//private APIResponse(Builder<T> builder) ***REMOVED***
//    this.status = builder.status;
//    this.data = builder.data;
//***REMOVED***
//
//public static class Builder<T>***REMOVED***
//    private int status;
//    private T data;
//    public Builder<T> status(int status)***REMOVED***
//        this.status = status;
//        return this;
//    ***REMOVED***
//    public Builder<T> data(T data)***REMOVED***
//        this.data = data;
//        return this;
//    ***REMOVED***
//    public APIResponse<T> build()***REMOVED***
//        return new APIResponse<T>(this);
//    ***REMOVED***
//***REMOVED***
