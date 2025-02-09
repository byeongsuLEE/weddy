package com.ssafy.schedule.common.exception;


import com.ssafy.schedule.common.response.ApiResponse;
import com.ssafy.schedule.common.response.ErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

/**
 * 작성자   : 이병수
 * 작성날짜 : 2024-08-04
 * 설명    : exception 처리 클래스
 * CustomException  : 명시적으로 작성된 예외를 처리
 * Exception : 그 외 모든 예외를 처리
 */
@Slf4j
@RestControllerAdvice
public class CustomExceptionHandler {


    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ApiResponse<String>> handleUserNotFoundException(UserNotFoundException userNotFoundException)
    {
        ErrorCode errorCode = userNotFoundException.getErrorCode();
        return ResponseEntity.status(errorCode.getStatus())
                .body(ApiResponse.error(errorCode.getStatus(),errorCode.getMessage()));

    }


    @ExceptionHandler(ScheduleNotFoundException.class)
    public ResponseEntity<ApiResponse<String>> handleUserNotFoundException(ScheduleNotFoundException scheduleNotFoundException)
    {
        ErrorCode errorCode = scheduleNotFoundException.getErrorCode();
        return ResponseEntity.status(errorCode.getStatus())
                .body(ApiResponse.error(errorCode.getStatus(),errorCode.getMessage()));

    }



    /**
     * 작성자   : 이병수
     * 작성일   : 2024-08-04
     * 설명     : 모든 Exception을 처리하는 메서드
//     * @param ex 발생한 Exception 객체
     * @return HTTP 상태 코드와 ApiResponse를 포함한 응답 객체 .
     *
     * 이 메서드는 CustomException을 제외한 모든 예외가 발생했을 때 호출됩니다.
     */

    /**
     * 파일 크기 제한
     * @param ex
     * @return
     */
    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<ApiResponse<String>> handleMaxUploadSizeExceededException(MaxUploadSizeExceededException ex) {
        return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
                .body(ApiResponse.error(ErrorCode.FILE_TOO_LARGE));
    }

//    /**
//     * 작성자   : 안진우
//     * 작성일   : 2024-08-11
//     * 설명     : 자격증명 예외 처리 핸들러 (이메일 또는 비밀번호 에러 시)
//     * @return HTTP 상태 코드와 ApiResponse를 포함한 응답 객체 .
//     */
//    @ExceptionHandler(BadCredentialsException.class)
//    public ResponseEntity<ApiResponse<String>> handleBadCredentialsException(BadCredentialsException ex) {
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                .body(ApiResponse.error(ErrorCode.EMAIL_OR_PASSWORD_UNMATCH));
//    }
}
