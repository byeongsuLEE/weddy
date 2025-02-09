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
public class CustomExceptionHandler {

    @ExceptionHandler(UserTokenNotFoundException.class)
    public ResponseEntity<ApiResponse<String>> userTokenNotFoundException(UserTokenNotFoundException e) {
        ErrorCode errorCode = e.getErrorCode();
        return ResponseEntity.status(errorCode.getStatus())
                .body(ApiResponse.error(errorCode));
    }


    @ExceptionHandler(PaymentNotValidateException.class)
    public ResponseEntity<ApiResponse<String>> paymentNotValidateException(PaymentNotValidateException e) {
        ErrorCode errorCode = e.getErrorCode();
        return ResponseEntity.status(errorCode.getStatus())
                .body(ApiResponse.error(errorCode));
    }

    @ExceptionHandler(ContractNotFoundException.class)
    public ResponseEntity<ApiResponse<String>> contractNotFoundException(ContractNotFoundException e) {
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

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ApiResponse<String>> UsernotFoundException(MethodArgumentTypeMismatchException ex) {
        log.info(ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error(ErrorCode.USER_NOT_FOUND));
    }

    @ExceptionHandler(CartNotFoundException.class)
    public ResponseEntity<ApiResponse<String>> UserNotFoundException(CartNotFoundException ex) {
        log.info(ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(ApiResponse.error(HttpStatus.NOT_FOUND,ex.getMessage()));
    }

    @ExceptionHandler(ConflictItemsException.class)
    public ResponseEntity<ApiResponse<String>> ConflictItemsException(ConflictItemsException ex) {
        log.info(ex.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(ApiResponse.error(HttpStatus.CONFLICT,ex.getMessage()));
    }

    @ExceptionHandler(ImageUploadFailedException.class)
    public ResponseEntity<ApiResponse<String>> ImageUploadFailedException(ImageUploadFailedException ex) {
        log.info(ex.getMessage());
        ErrorCode errorCode = ex.getErrorCode();
        return ResponseEntity.status(errorCode.getStatus())
                .body(ApiResponse.error(errorCode));
    }
//    @ExceptionHandler(JsonProcessingException.class)
//    public ResponseEntity<ApiResponse<String>> handleJsonProcessingException(JsonProcessingException ex) {
//        log.error("JSON 처리 중 오류 발생: {}", ex.getMessage());
//        return ResponseEntity.status(HttpStatus.PROCESSING)
//                .body(ApiResponse.error(HttpStatus.PROCESSING,ex.getMessage()));
//    }
}
