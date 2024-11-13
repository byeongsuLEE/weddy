package ssafy.cachescheduler.scheduler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import ssafy.cachescheduler.exception.SchedulerException;
import ssafy.cachescheduler.mapper.ProductMapper;
import ssafy.cachescheduler.mapper.ReviewMapper;
import ssafy.cachescheduler.util.RedisUtil;
import weddy.commonlib.constant.KeyType;

@Slf4j
@Component
@EnableAsync
@RequiredArgsConstructor
public class CacheScheduler ***REMOVED***
    private final RedisUtil redisUtil;
    private final ProductMapper productMapper;
    private final ReviewMapper reviewMapper;


    /**
     * 이 작업이 실패할 경우 최대 3번까지 재시도하며, 재시도 간격은 2초
     */
    @Retryable(
            value = ***REMOVED*** SchedulerException.class ***REMOVED***,
            maxAttempts = 3,
            backoff = @Backoff(delay = 2000)  // 2초 지연 후 재시도
    )
    @Async("taskExecutor")
    @Scheduled(cron = "$***REMOVED***cron.expression***REMOVED***")
    public void productCachingScheduler() ***REMOVED***
        log.info("productCachingScheduler 실행");
        productMapper.getAllProducts()
                .forEach(product -> redisUtil.addToHashSet(KeyType.PRODUCT,product.getId(),product));
        log.info("productCachingScheduler 종료");
    ***REMOVED***

    /**
     * 이 작업이 실패할 경우 최대 3번까지 재시도하며, 재시도 간격은 2초
     */
    @Retryable(
            value = ***REMOVED*** SchedulerException.class ***REMOVED***,
            maxAttempts = 3,
            backoff = @Backoff(delay = 2000)  // 2초 지연 후 재시도
    )
    @Async("taskExecutor")
    @Scheduled(cron = "$***REMOVED***cron.expression***REMOVED***")
    public void productReviewCachingScheduler() ***REMOVED***
        log.info("productReviewCachingScheduler 실행");
        reviewMapper.getAllReviews()
                        .forEach(review -> redisUtil.addToHashSet(KeyType.REVIEW,review.getProductId(),review));
        log.info("productReviewCachingScheduler 종료");
    ***REMOVED***




***REMOVED***
