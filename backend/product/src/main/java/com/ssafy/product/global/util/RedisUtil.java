package com.ssafy.product.global.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Repository;
import weddy.commonlib.constant.KeyType;
import weddy.commonlib.dto.response.ProductResponseDto;
import weddy.commonlib.dto.response.ReviewResponseDto;

import java.util.Map;
import java.util.Set;

@Repository
@RequiredArgsConstructor
@Slf4j
public class RedisUtil {
    private final int RANKING_MAX_SIZE = 7;
    private final int INCREASE = 1;
    private final String ZSET_KEY = "productRanking";
    private final RedisTemplate<String, Object> redisTemplate;
    private ZSetOperations<String, Object> zSetOps;

    @PostConstruct
    public void init() {
        this.zSetOps = redisTemplate.opsForZSet();
    }

    /**
     * 키, 값, TTL 시간 설정하여 삽입
     *
     * @param key
     * @param value
     */
    public void setData(String key, Object value) {
        redisTemplate.opsForValue()
                .set(key, value);
    }

    /**
     * 키에대한 값 가져오기
     *
     * @param key
     * @return
     */
    public Object getData(String key) {
        return redisTemplate.opsForValue()
                .get(key);
    }

    /**
     * 키 삭제
     *
     * @param key
     */
    public void deleteData(String key) {
        redisTemplate.delete(key);
    }

    /**
     * 현재 생성되어있는 키에 값 추가하기
     *
     * @param key
     * @param value
     */
    public void appendData(String key, String value) {
        redisTemplate.opsForValue()
                .append(key, value);
    }

    /**
     * sortedSet 데이터 추가
     * @param product
     */
    public void addToSortedSet(final ProductResponseDto product) {
        // 새로운 데이터 추가 및 기존데이터 score 증가
        zSetOps.incrementScore(ZSET_KEY, product, INCREASE);
    }

    /**
     * sortedSet 기준 상위 RANKING_MAX_SIZE 개의 데이터 조회
     */
    public Set<Object> getTopRanked() {
        return zSetOps.reverseRange(ZSET_KEY, 0, RANKING_MAX_SIZE); // 높은 점수 순으로 정렬
    }


    /**
     * HashSet 자료구조 사용 데이터 저장
     */
    public void addToHashSet(final KeyType keyType , final Long id, final Object object) {
        if(object instanceof ReviewResponseDto) {
            ObjectMapper objectMapper = new ObjectMapper();
            // Java 8 날짜/시간 타입 지원 모듈 등록
            objectMapper.registerModule(new JavaTimeModule());
            ReviewResponseDto review = objectMapper.convertValue(object, ReviewResponseDto.class);
            redisTemplate.opsForHash().put(keyType.name() + ":" + id, review.getId(), object);
            return;
        }
        redisTemplate.opsForHash().put(keyType.name(), id, object);
    }

    /**
     * HashSet 단일 데이터 조회
     * @param id
     * @return
     */
    public Object getHashValue(final KeyType keyType, final Long id) {
        return redisTemplate.opsForHash().get(keyType.name(), id);
    }

    /**
     * HashSet 전체 데이터 조회
     * @return
     */
    public Map<Object, Object> getAllHashValues(String keyType) {
        return redisTemplate.opsForHash().entries(keyType);
    }
}