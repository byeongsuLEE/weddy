package com.example.user.contract.global.util.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public enum ErrorCode ***REMOVED***
    PRODUCT_NOT_FOUND_EXCEPTION(HttpStatus.NOT_FOUND, "상품을 찾을 수 없습니다."),
    IMAGE_INVALID_EXCEPTION(HttpStatus.BAD_REQUEST,"이미지는 필수 입력 값 입니다."),
    FILE_TOO_LARGE(HttpStatus.PAYLOAD_TOO_LARGE,"파일의 최대용량이 초과되었습니다."),
    METHOD_NOT_ALLOWED(HttpStatus.METHOD_NOT_ALLOWED,"HTTP METHOD를 확인해주세요."),
    CONTRACT_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 계약서를 찾을 수 없습니다."),
    PAYMENT_NOT_VALIDATE(HttpStatus.BAD_REQUEST,"결제 정보가 일치하지 않습니다.");
    private HttpStatus status;
    private String message;
***REMOVED***
