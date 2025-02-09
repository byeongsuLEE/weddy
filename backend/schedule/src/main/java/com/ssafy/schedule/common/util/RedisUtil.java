package com.ssafy.schedule.common.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;
import weddy.commonlib.constant.KeyType;


@Repository
@RequiredArgsConstructor
public class RedisUtil {
    private static final Logger log = LoggerFactory.getLogger(RedisUtil.class);

    private final RedisTemplate<String, Object> redisTemplate;
    /**
     * HashSet 자료구조 사용 데이터 저장
     */
    public <K> void addToHashSet(final KeyType keyType, final Object object) {

        if(object instanceof CreateScheduleInputDto) {

            ObjectMapper objectMapper = new ObjectMapper();
            // Java 8 날짜/시간 타입 지원 모듈 등록
            objectMapper.registerModule(new JavaTimeModule());
            CreateScheduleInputDto schedule = objectMapper.convertValue(object, CreateScheduleInputDto.class);
            log.info("create input dto가 맞다 sdfsdafdsf"+schedule.toString() + keyType.name() +schedule.getStartDate());
            String pingResponse = redisTemplate.getConnectionFactory().getConnection().ping();
              log.info("Redis 연결 상태: " + pingResponse);



            redisTemplate.opsForHash().put(keyType.name() + ":" +schedule.getStartDate(), schedule.getCode(), object);
            log.info("create input dto가 맞다",schedule);

            // 데이터 조회 예시
            String redisKey = keyType.name() + ":" + schedule.getStartDate();
            String hashKey = schedule.getCode();
// Redis에서 데이터 조회
            System.out.println("조회된  redisKey 값: " + redisKey);
            System.out.println("조회된 값: hashKey " + hashKey);
            Object retrievedObject = redisTemplate.opsForHash().get(redisKey, hashKey);

            if (retrievedObject != null) {
                log.info("조회된 값: " + retrievedObject.toString());
            } else {
                log.info("해당 키에 대한 데이터가 없습니다.");
            }
//
//            // 커플이 존재할 경우 커플의 FCM Token도 저장
//            if(schedule.getUserCoupleToken().getCoupleFcmToken() != null) {
//                redisTemplate.opsForHash().put(keyType.name() + ":" +schedule.getStartDate(), schedule.getCode(), object);
//            }

        }

    }
    
}