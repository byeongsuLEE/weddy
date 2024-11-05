package ssafy.cachescheduler.scheduler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
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

    @Scheduled(cron = "0 0 0/1 * * *")
    public void productCachingScheduler() ***REMOVED***
        log.info("productCachingScheduler 실행");
        productMapper.getAllProducts()
                .forEach(product -> redisUtil.addToHashSet(KeyType.PRODUCT,product.getId(),product));
        log.info("productCachingScheduler 종료");
    ***REMOVED***


    @Scheduled(cron = "0 0 0/1 * * *")
    public void productReviewCachingScheduler() ***REMOVED***
        log.info("productReviewCachingScheduler 실행");
        reviewMapper.getAllReviews()
                        .forEach(review -> redisUtil.addToHashSet(KeyType.REVIEW,review.getProductId(),review));
        log.info("productReviewCachingScheduler 종료");
    ***REMOVED***

***REMOVED***
