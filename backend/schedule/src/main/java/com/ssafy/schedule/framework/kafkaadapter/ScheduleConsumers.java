package com.ssafy.schedule.framework.kafkaadapter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.schedule.application.usecase.CreateScheduleUsecase;
import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.naming.NamingEnumeration;
import java.io.IOException;
import java.time.LocalDate;
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
public class ScheduleConsumers ***REMOVED***

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final CreateScheduleUsecase createScheduleUsecase;



    @KafkaListener(topics = "$***REMOVED***consumer.topic1.name***REMOVED***",groupId = "$***REMOVED***consumer.groupid.name***REMOVED***")
    public void paymentProduct(ConsumerRecord<String, String> record) throws IOException ***REMOVED***
        log.info("뭐가 되는거지? "+ record.value());

        Map<String, String> event = objectMapper.readValue(record.value(), Map.class);
        Long productId = Long.valueOf(event.get("productId"));
        String content = event.get("title");

        // DTO 생성
        CreateScheduleInputDto dto = CreateScheduleInputDto.builder()
                .productId(productId)
                .content(content)
                .startDate(LocalDate.now())  // 시작일을 현재 날짜로 설정 (예시)
                .endDate(LocalDate.now().plusDays(30))  // 종료일을 30일 후로 설정 (예시)
                .contractType()  // 기본 계약 타입 설정 (예시)
                .build();

        // UseCase를 통해 일정 생성
        createScheduleUseCase.create(dto);
    ***REMOVED***
    ***REMOVED***

***REMOVED***


