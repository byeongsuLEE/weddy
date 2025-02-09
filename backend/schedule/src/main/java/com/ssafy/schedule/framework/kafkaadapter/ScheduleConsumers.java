package com.ssafy.schedule.framework.kafkaadapter;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.schedule.application.outputport.FCMOutputPort;
import com.ssafy.schedule.application.outputport.ScheduleOutPutPort;
import com.ssafy.schedule.application.usecase.CreateScheduleUsecase;
import com.ssafy.schedule.domain.event.EventResult;
import com.ssafy.schedule.domain.event.EventType;
import com.ssafy.schedule.domain.event.PaymentProductInfo;
import com.ssafy.schedule.domain.model.Schedule;
import com.ssafy.schedule.framework.fcmadapter.FCMAdapter;
import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 *
 * @ 작성자   : 이병수
 * @ 작성일   : 2024-10-29
 * @ 설명     : 카프카 이벤트 받는 컨슈머
 */

@Service
@RequiredArgsConstructor
@Slf4j
public class ScheduleConsumers {

    private final ObjectMapper objectMapper ;
    private final CreateScheduleUsecase createScheduleUsecase;

    private final ScheduleEventProducer eventProducer;
    private final ScheduleOutPutPort scheduleOutPutPort;
    private final RedisTemplate<String,Object> redisTemplate;
    private final FCMOutputPort fcmOutputPort;

    @KafkaListener(topics = "${consumer.topic1.name}",groupId = "${consumer.groupid.name}")
    public void paymentProduct(ConsumerRecord<String, String> record) throws IOException {

        PaymentProductInfo paymentProductInfo = objectMapper.readValue(record.value(), PaymentProductInfo.class);
        EventResult eventResult = EventResult.createEventResult(paymentProductInfo);
        try{

            log.info("뭐가 되는거지? "+ record.value());



            log.info(paymentProductInfo.toString());
            //prododcut로 일정 생성
            CreateScheduleInputDto scheduleInfo = CreateScheduleInputDto.createScheduleInputDto(paymentProductInfo);
            // UseCase를 통해 일정 생성 및 알림 발송
            createScheduleUsecase.createSchedule(scheduleInfo);

            String fcmToken = scheduleInfo.getUserCoupleToken().getMyFcmToken();
            String title =  scheduleInfo.getType().name();
                    String body  = scheduleInfo.getContent();
            fcmOutputPort.send(fcmToken,title,body);
            // 성공 시 이벤트 발생
            eventResult.updateIsSuccess(true);

        }
        catch(Exception e){
            eventResult.updateIsSuccess(false);

        }
//        eventProducer.occurEvent(event);

    }

    @KafkaListener(topics = "${consumer.topic2.name}",groupId = "${consumer.groupid.name}")
    public void coupleCodeChange(ConsumerRecord<String, String> record) throws IOException {

        log.info("커플 코드 변경 이벤트 받음  "+ record.value());
        Map<String,String>  userData = objectMapper.readValue(record.value(), Map.class);
        String oldCoupleCode  = userData.get("oldCoupleCode");
        String newCoupleCode  = userData.get("newCoupleCode");

        // 커플코드 변경 시 일정 정보 업데이트
        // 기존 일정 데이터의 유저 정보를
        scheduleOutPutPort.getSchedulesByCoupleCode(oldCoupleCode).forEach(schedule -> {
            schedule.updateCoupleCode(newCoupleCode);

            String key = "SCHEDULE:"+schedule.getStartDate().toString();
            Object scheduleInfo = redisTemplate.opsForHash().get(key, oldCoupleCode);
            redisTemplate.opsForHash().put(key,newCoupleCode,scheduleInfo);
            redisTemplate.opsForHash().delete(key,oldCoupleCode);
        });





    }



}


