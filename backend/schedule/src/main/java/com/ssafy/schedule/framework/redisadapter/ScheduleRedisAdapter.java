package com.ssafy.schedule.framework.redisadapter;

import com.ssafy.schedule.application.outputport.ScheduleOutPutPort;
import com.ssafy.schedule.application.outputport.ScheduleRedisCacheOutputPort;
import com.ssafy.schedule.common.util.RedisUtil;
import com.ssafy.schedule.domain.model.Schedule;
import com.ssafy.schedule.framework.jpaadapter.ScheduleRepository;
import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Repository;
import weddy.commonlib.constant.KeyType;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-26
 * 설명    :
 */

@Repository
@RequiredArgsConstructor
public class ScheduleRedisAdapter implements ScheduleRedisCacheOutputPort {

    private final RedisUtil redisUtil;


    @Override
    public void saveScheduleToCache(CreateScheduleInputDto createScheduleInputDto) {

        redisUtil.addToHashSet(KeyType.SCHEDULE,createScheduleInputDto);
    }
}
