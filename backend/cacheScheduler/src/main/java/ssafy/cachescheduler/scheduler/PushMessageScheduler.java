package ssafy.cachescheduler.scheduler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.core.RedisTemplate;
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
import weddy.commonlib.dto.response.CreateScheduleInputDto;

import java.time.LocalDate;

@Slf4j
@Component
@EnableAsync
@RequiredArgsConstructor
public class PushMessageScheduler ***REMOVED***
    @Autowired
    @Qualifier("redisScheduleTemplate")
    private final RedisTemplate<String,Object> redisTemplate;

    private final ObjectMapper objectMapper;

    /**
     * 푸시알림 해당날짜
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-11-08
     * @ 설명     :

     */

    @Async("taskExecutor")
    @Scheduled(cron = "0 0 9 * * *")
    public void sendPushMessage() throws FirebaseMessagingException ***REMOVED***

        // 현재 로컬 날짜 얻어봐
        LocalDate localDate = LocalDate.now();
        String key = "SCHEDULE:"+localDate;
        // 해당 날짜에 등록된 스케쥴이 있는지 확인
//        redisTemplate.opsForHash(key).entries()


        redisTemplate.opsForHash().entries(key).forEach((k,v)->***REMOVED***
            log.info("key : "+k+" value : "+v.toString());
            String token = k.toString();

            CreateScheduleInputDto createScheduleInputDto = objectMapper.convertValue(v, CreateScheduleInputDto.class);;
            log.info("createScheduleInputDto : "+createScheduleInputDto.toString());

            //알림전송
            // 푸시 알림 메시지 생성
            Message message = Message.builder()
                    .setNotification(Notification.builder()
                            .setTitle(createScheduleInputDto.getType().DRESS.toString())
                            .setBody(createScheduleInputDto.getContent().toString())
                            .build())
                    .setToken(token) // 푸시 알림 토큰
                    .build();

            // 푸시 알림 보내기
            String response = null;
            try ***REMOVED***
                response = FirebaseMessaging.getInstance().send(message);
            ***REMOVED*** catch (FirebaseMessagingException e) ***REMOVED***
                throw new RuntimeException(e);
            ***REMOVED***
            System.out.println("Successfully sent message: " + response);


        ***REMOVED***);



        
    ***REMOVED***


***REMOVED***
