package com.example.user.contract.global.aop;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
@RequiredArgsConstructor
@Slf4j
public class LoggingAspect ***REMOVED***
    private final HttpServletRequest request;
    /**
     * 작성자   : 안진우
     * 설명     : 모든 컨트롤러 패키지에서 사용할 포인트 컷
     */
    @Pointcut("execution(* com.example.user.contract.controller..*(..)) ")
    private void controllerExecution() ***REMOVED******REMOVED***

    /**
     * 작성자   : 안진우
     * 설명     : Controller클래스, 실행 메서드, 종료 시간 로깅
     */
    @Around("controllerExecution()")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable ***REMOVED***
        long startTime = System.currentTimeMillis();
        try ***REMOVED***
//            log.info("[***REMOVED******REMOVED*** - ***REMOVED******REMOVED***] URI: ***REMOVED******REMOVED***",
//                    request.getMethod(),
//                    joinPoint.getSignature().toShortString().replace("(..)", ""),
//                    request.getRequestURI());
            return joinPoint.proceed();
        ***REMOVED*** finally ***REMOVED***
            long endTime = System.currentTimeMillis();
            log.info("[Execution Time] ***REMOVED******REMOVED*** ms", endTime - startTime);
        ***REMOVED***
    ***REMOVED***

    /**
     * 작성자   : 안진우
     * 설명     : 컨트롤러에서 예외 발생시 작동
     * 메소드 발생 시점, HTTP 메서드 타입, Exception 타입, Exception 메세지, 에러 발생 위치 (패키지,메서드,라인), 에러 코드
     */
    @AfterThrowing(pointcut = "controllerExecution()", throwing = "ex")
    public void controllerAfterThrowing(JoinPoint joinPoint, Throwable ex) ***REMOVED***
        StackTraceElement[] stackTrace = ex.getStackTrace();
        StackTraceElement errorLocation = stackTrace[0];

        log.error("[Error] Method : ***REMOVED******REMOVED***",
                joinPoint.getSignature().getName());

        log.error("[ExceptionType] : ***REMOVED******REMOVED*** | Message: ***REMOVED******REMOVED***",
                ex.getClass().getName(),
                ex.getMessage());

        log.error("[Occurred at] : ***REMOVED******REMOVED***.***REMOVED******REMOVED*** (Line: ***REMOVED******REMOVED***)",
                errorLocation.getClassName(),
                errorLocation.getMethodName(),
                errorLocation.getLineNumber());
    ***REMOVED***


***REMOVED***
