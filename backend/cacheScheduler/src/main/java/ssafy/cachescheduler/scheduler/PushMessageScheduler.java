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
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import weddy.commonlib.dto.response.CreateScheduleInputDto;

import java.time.LocalDate;

@Slf4j
@Component
@EnableAsync
@RequiredArgsConstructor
public class PushMessageScheduler {
    @Autowired
    @Qualifier("redisScheduleTemplate")
    private final RedisTemplate<String, Object> redisScheduleTemplate;

    @Autowired
    @Qualifier("redisUserTemplate")
    private final RedisTemplate<String, String> redisUserTemplate;

    private final ObjectMapper objectMapper;

    /**
     * 푸시알림 해당날짜
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-11-08
     * @ 설명     :
     */

    @Async("taskExecutor")
    @Scheduled(cron = "0 0 9 * * *")
    public void sendPushMessage() throws FirebaseMessagingException {


        LocalDate localDate = LocalDate.now();
        String key = "SCHEDULE:" + localDate;

        //일정 데이터를 순회
        redisScheduleTemplate.opsForHash().entries(key).forEach((coupleCode, scheduleInfo) -> {
            log.info("key : " + coupleCode + " value : " + scheduleInfo.toString());
            CreateScheduleInputDto createScheduleInputDto = objectMapper.convertValue(scheduleInfo, CreateScheduleInputDto.class);
            log.info("createScheduleInputDto : " + createScheduleInputDto.toString());

            //일정의 커플코드를 통해 fcm token 가져오고 푸시알림전송
            String userKey = "USER:" + coupleCode;
            redisUserTemplate.opsForHash().keys(userKey)
                    .forEach(userId -> {
                        log.info("등록된 일정의 userId : " + userId);
                        Object object =  redisUserTemplate.opsForHash().get(coupleCode.toString(), userId);
                        if(object!=null) {
                            String fcmToken = object.toString();
                            log.info("fcmToken : " + fcmToken);
                            sendFirebaseNotification(fcmToken, createScheduleInputDto);

                        }
                    });
        });
        //커플코드로 레디스에 있는 user 의 fcm token 가져오기
    }

    // 푸시 알림 전송을 별도 메서드로 분리
    private void sendFirebaseNotification(String fcmToken, CreateScheduleInputDto scheduleDto) {
        try {
            Message message = Message.builder()
                    .setNotification(Notification.builder()
                            .setTitle(scheduleDto.getType().toString())
                            .setBody(scheduleDto.getContent())
                            .build())
                    .setToken(fcmToken)
                    .build();

            String response = FirebaseMessaging.getInstance().send(message);
            log.info("푸시 알림 전송 성공: " + response);
        } catch (FirebaseMessagingException e) {
            log.error("푸시 알림 전송 실패: FCM 토큰=" + fcmToken, e);
        }
    }

}
