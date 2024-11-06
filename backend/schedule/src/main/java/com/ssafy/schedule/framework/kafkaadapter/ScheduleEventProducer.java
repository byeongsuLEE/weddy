package com.ssafy.schedule.framework.kafkaadapter;

import com.ssafy.schedule.domain.event.EventResult;
import com.ssafy.schedule.domain.event.PaymentProductInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
@Slf4j
public class ScheduleEventProducer ***REMOVED***
    @Value("$***REMOVED***producers.topic1.name***REMOVED***")
    private String TOPIC;
    private final KafkaTemplate<String, EventResult>  KafkaTemplate;

    public void sendScheduleResultEvent(EventResult eventResult)***REMOVED***
        log.info("EventResult : "+eventResult.toString());
        CompletableFuture<SendResult<String, EventResult>> send = KafkaTemplate.send(TOPIC, eventResult);
        send.whenComplete((sendResult,ex)->***REMOVED***
            if(ex!=null)***REMOVED***
                log.info("결제 이벤트 전달 실패."+ ex.getMessage());
            ***REMOVED***else***REMOVED***
                log.info("결과 이벤트 전달 완료");
            ***REMOVED***
        ***REMOVED***);
    ***REMOVED***

***REMOVED***
