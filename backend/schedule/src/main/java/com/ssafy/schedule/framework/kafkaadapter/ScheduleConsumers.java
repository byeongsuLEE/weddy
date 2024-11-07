package com.ssafy.schedule.framework.kafkaadapter;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.schedule.application.usecase.CreateScheduleUsecase;
import com.ssafy.schedule.domain.event.EventResult;
import com.ssafy.schedule.domain.event.EventType;
import com.ssafy.schedule.domain.event.PaymentProductInfo;
import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

/**
 *
 * @ 작성자   : 이병수
 * @ 작성일   : 2024-10-29
 * @ 설명     : 카프카 이벤트 받는 컨슈머
 */

@Service
@RequiredArgsConstructor
@Slf4j
public class ScheduleConsumers ***REMOVED***

    private final ObjectMapper objectMapper ;
    private final CreateScheduleUsecase createScheduleUsecase;

    private final ScheduleEventProducer eventProducer;

    private final RedisTemplate redisTemplate;

    @KafkaListener(topics = "$***REMOVED***consumer.topic1.name***REMOVED***",groupId = "$***REMOVED***consumer.groupid.name***REMOVED***")
    public void paymentProduct(ConsumerRecord<String, String> record) throws IOException ***REMOVED***

        PaymentProductInfo paymentProductInfo = objectMapper.readValue(record.value(), PaymentProductInfo.class);
        EventResult eventResult = EventResult.createEventResult(paymentProductInfo);
        try***REMOVED***

            log.info("뭐가 되는거지? "+ record.value());



            log.info(paymentProductInfo.toString());
            //prododcut로 일정 생성
            CreateScheduleInputDto scheduleInfo = CreateScheduleInputDto.createScheduleInputDto(paymentProductInfo);
            // UseCase를 통해 일정 생성
            createScheduleUsecase.createSchedule(scheduleInfo);


            //푸시알림전송
            redisTemplate.opsForHash().put("schedule:"+ scheduleInfo.getStartDate(), scheduleInfo.getCode(),scheduleInfo.getContent(),scheduleInfo.getUserCoupleToken().getMyFcmToken());

            // 성공 시 이벤트 발생
            eventResult.updateIsSuccess(true);

        ***REMOVED***
        catch(Exception e)***REMOVED***
            eventResult.updateIsSuccess(false);

        ***REMOVED***
//        eventProducer.occurEvent(event);





    ***REMOVED***


***REMOVED***


