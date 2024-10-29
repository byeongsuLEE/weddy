package com.ssafy.product.util.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@JsonPropertyOrder(***REMOVED***"code", "message", "data"***REMOVED***)
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class ApiResponse<T> ***REMOVED***
    private final HttpStatus status;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private final String message;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private final T data;

    public static <T> ApiResponse<T> success(HttpStatus status, T data,String message) ***REMOVED***
        return new ApiResponse<T>(status, message, data);
    ***REMOVED***

    public static <T> ApiResponse<T> success(T data,String message) ***REMOVED***
        return new ApiResponse<T>(HttpStatus.OK, message, data);
    ***REMOVED***
    public static <T> ApiResponse<T> error(ErrorCode errorCode) ***REMOVED***
        return new ApiResponse<T>(errorCode.getStatus(),errorCode.getMessage(),null);
    ***REMOVED***

    public static <T> ApiResponse<T> error(HttpStatus status, String message) ***REMOVED***
        return new ApiResponse<T>(status,message,null);
    ***REMOVED***
***REMOVED***