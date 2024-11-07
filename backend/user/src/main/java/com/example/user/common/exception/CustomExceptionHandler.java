package com.example.user.common.exception;


import com.example.user.common.dto.ApiResponse;
import com.example.user.common.dto.ErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import java.util.Objects;

@Slf4j
@RestControllerAdvice
public class CustomExceptionHandler ***REMOVED***


    @ExceptionHandler(PaymentNotValidateException.class)
    public ResponseEntity<ApiResponse<String>> paymentNotValidateException(PaymentNotValidateException e) ***REMOVED***
        ErrorCode errorCode = e.getErrorCode();
        return ResponseEntity.status(errorCode.getStatus())
                .body(ApiResponse.error(errorCode));
    ***REMOVED***

    @ExceptionHandler(ContractNotFoundException.class)
    public ResponseEntity<ApiResponse<String>> contractNotFoundException(ContractNotFoundException e) ***REMOVED***
        ErrorCode errorCode = e.getErrorCode();
        return ResponseEntity.status(errorCode.getStatus())
                .body(ApiResponse.error(errorCode));
    ***REMOVED***

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<ApiResponse<String>> handleMaxUploadSizeExceededException(MaxUploadSizeExceededException ex) ***REMOVED***
        return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
                .body(ApiResponse.error(ErrorCode.FILE_TOO_LARGE));
    ***REMOVED***

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ApiResponse<String>> handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException ex) ***REMOVED***
        return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED)
                .body(ApiResponse.error(ErrorCode.METHOD_NOT_ALLOWED));
    ***REMOVED***

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<String>> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) ***REMOVED***
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
    ***REMOVED***

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ApiResponse<String>> UsernotFoundException(MethodArgumentTypeMismatchException ex) ***REMOVED***
        log.info(ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error(ErrorCode.USER_NOT_FOUND));
    ***REMOVED***
***REMOVED***
