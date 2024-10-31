package com.ssafy.product.product.service;

import com.ssafy.product.global.util.RedisUtil;
import com.ssafy.product.global.util.exception.SyncException;
import com.ssafy.product.product.constant.KeyType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Recover;
import org.springframework.retry.annotation.Retryable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class SyncServiceImpl<T>implements SyncService<T> ***REMOVED***
    private final RedisUtil redisUtil;
    @Override
    @Async
    @Retryable(
            value = ***REMOVED*** SyncException.class ***REMOVED***, // 재시도할 예외 타입
            maxAttempts = 3,                 // 최대 재시도 횟수
            backoff = @Backoff(delay = 2000) // 재시도 간격 (밀리초)
    )
    public void syncToReadDatabaseAsync(final KeyType keyType,final Long id, final T responseData) ***REMOVED***
        try***REMOVED***
            saveToReadDataBase(keyType, id, responseData);
        ***REMOVED***catch(Exception e)***REMOVED***
            throw new SyncException(id);
        ***REMOVED***
    ***REMOVED***

    @Override
    @Recover
    public void recover(Exception e) ***REMOVED***
        log.error(e.getMessage());
    ***REMOVED***

    private void saveToReadDataBase(final KeyType keyType, final Long id, final Object object) ***REMOVED***
        redisUtil.addToHashSet(keyType,id,object);
    ***REMOVED***
***REMOVED***
