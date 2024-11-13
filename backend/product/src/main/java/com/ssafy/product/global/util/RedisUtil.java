package com.ssafy.product.global.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.ssafy.product.product.constant.KeyType;
import weddy.commonlib.dto.response.ProductResponseDto;
import com.ssafy.product.product.dto.response.ReviewResponseDto;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.Set;

@Repository
@RequiredArgsConstructor
public class RedisUtil ***REMOVED***
    private final int RANKING_MAX_SIZE = 7;
    private final int INCREASE = 1;
    private final String ZSET_KEY = "productRanking";
    private final RedisTemplate<String, Object> redisTemplate;
    private ZSetOperations<String, Object> zSetOps;

    @PostConstruct
    public void init() ***REMOVED***
        this.zSetOps = redisTemplate.opsForZSet();
    ***REMOVED***

    /**
     * 키, 값, TTL 시간 설정하여 삽입
     *
     * @param key
     * @param value
     */
    public void setData(String key, Object value) ***REMOVED***
        redisTemplate.opsForValue()
                .set(key, value);
    ***REMOVED***

    /**
     * 키에대한 값 가져오기
     *
     * @param key
     * @return
     */
    public Object getData(String key) ***REMOVED***
        return redisTemplate.opsForValue()
                .get(key);
    ***REMOVED***

    /**
     * 키 삭제
     *
     * @param key
     */
    public void deleteData(String key) ***REMOVED***
        redisTemplate.delete(key);
    ***REMOVED***

    /**
     * 현재 생성되어있는 키에 값 추가하기
     *
     * @param key
     * @param value
     */
    public void appendData(String key, String value) ***REMOVED***
        redisTemplate.opsForValue()
                .append(key, value);
    ***REMOVED***

    /**
     * sortedSet 데이터 추가
     * @param product
     */
    public void addToSortedSet(final ProductResponseDto product) ***REMOVED***
        // 새로운 데이터 추가 및 기존데이터 score 증가
        zSetOps.incrementScore(ZSET_KEY, product, INCREASE);
    ***REMOVED***

    /**
     * sortedSet 기준 상위 RANKING_MAX_SIZE 개의 데이터 조회
     */
    public Set<Object> getTopRanked() ***REMOVED***
        return zSetOps.reverseRange(ZSET_KEY, 0, RANKING_MAX_SIZE); // 높은 점수 순으로 정렬
    ***REMOVED***


    /**
     * HashSet 자료구조 사용 데이터 저장
     */
    public void addToHashSet(final KeyType keyType , final Long id, final Object object) ***REMOVED***
        if(object instanceof ReviewResponseDto) ***REMOVED***
            ObjectMapper objectMapper = new ObjectMapper();
            // Java 8 날짜/시간 타입 지원 모듈 등록
            objectMapper.registerModule(new JavaTimeModule());
            ReviewResponseDto review = objectMapper.convertValue(object, ReviewResponseDto.class);
            redisTemplate.opsForHash().put(keyType.name() + ":" + id, review.id(), object);
            return;
        ***REMOVED***
        redisTemplate.opsForHash().put(keyType.name(), id, object);
    ***REMOVED***

    /**
     * HashSet 단일 데이터 조회
     * @param id
     * @return
     */
    public Object getHashValue(final KeyType keyType, final Long id) ***REMOVED***
        return redisTemplate.opsForHash().get(keyType.name(), id);
    ***REMOVED***

    /**
     * HashSet 전체 데이터 조회
     * @return
     */
    public Map<Object, Object> getAllHashValues(String keyType) ***REMOVED***
        return redisTemplate.opsForHash().entries(keyType);
    ***REMOVED***


***REMOVED***