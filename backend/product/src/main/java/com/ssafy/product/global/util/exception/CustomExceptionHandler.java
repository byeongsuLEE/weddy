package com.ssafy.product.global.util.exception;

import com.ssafy.product.global.util.response.ApiResponse;
import com.ssafy.product.global.util.response.ErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import java.util.Objects;

@Slf4j
@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(ImageInvalidException.class)
    public ResponseEntity<ApiResponse<String>> imageInvalidException(ImageInvalidException e) {
        ErrorCode errorCode = e.getErrorCode();
        return ResponseEntity.status(errorCode.getStatus())
                .body(ApiResponse.error(errorCode));
    }

    @ExceptionHandler(ProductNotFoundExpception.class)
    public ResponseEntity<ApiResponse<String>> productNotFoundException(ProductNotFoundExpception e) {
        ErrorCode errorCode = e.getErrorCode();
        return ResponseEntity.status(errorCode.getStatus())
                .body(ApiResponse.error(errorCode));
    }

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<ApiResponse<String>> handleMaxUploadSizeExceededException(MaxUploadSizeExceededException ex) {
        return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
                .body(ApiResponse.error(ErrorCode.FILE_TOO_LARGE));
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ApiResponse<String>> handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException ex) {
        return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED)
                .body(ApiResponse.error(ErrorCode.METHOD_NOT_ALLOWED));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<String>> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
        log.info(ex.getObjectName());
        log.info(ex.getBindingResult().toString());
        log.info(ex.getTitleMessageCode());

        String errorMessage = ex.getBindingResult().getAllErrors().stream()
                .map(error -> error.getDefaultMessage())       // DefaultMessage를 추출하고
                .filter(Objects::nonNull)                      // Null이 아닌 메시지만 필터링
                .findFirst()                                   // 첫 번째 메시지만 가져옴
                .orElse(null);                                 // 메시지가 없으면 null 반환

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ApiResponse.error(HttpStatus.BAD_REQUEST,errorMessage));
    }
}
