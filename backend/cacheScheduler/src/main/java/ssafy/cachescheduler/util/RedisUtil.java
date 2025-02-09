package ssafy.cachescheduler.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;
import weddy.commonlib.constant.KeyType;
import weddy.commonlib.dto.response.CreateScheduleInputDto;
import weddy.commonlib.dto.response.ReviewResponseDto;

@Repository
@RequiredArgsConstructor
public class RedisUtil {
    private final RedisTemplate<String, Object> redisTemplate;

    /**
     * HashSet 자료구조 사용 데이터 저장
     */
    public <K> void addToHashSet(final KeyType keyType , final K id, final Object object) {
        if(object instanceof ReviewResponseDto) {
            ObjectMapper objectMapper = new ObjectMapper();
            // Java 8 날짜/시간 타입 지원 모듈 등록
            objectMapper.registerModule(new JavaTimeModule());
            ReviewResponseDto review = objectMapper.convertValue(object, ReviewResponseDto.class);
            redisTemplate.opsForHash().put(keyType.name() + ":" + id, review.getId(), object);
            return;
        }

        if(object instanceof CreateScheduleInputDto) {
            ObjectMapper objectMapper = new ObjectMapper();
            // Java 8 날짜/시간 타입 지원 모듈 등록
            objectMapper.registerModule(new JavaTimeModule());
            CreateScheduleInputDto schedule = objectMapper.convertValue(object, CreateScheduleInputDto.class);
            redisTemplate.opsForHash().put(keyType.name() + ":" +schedule.getStartDate(), schedule.getUserCoupleToken().getMyFcmToken(), object);

            // 커플이 존재할 경우 커플의 FCM Token도 저장
            if(schedule.getUserCoupleToken().getCoupleFcmToken() != null) {
                redisTemplate.opsForHash().put(keyType.name() + ":" +schedule.getStartDate(), schedule.getUserCoupleToken().getCoupleFcmToken(), object);
            }
            redisTemplate.opsForHash().put(keyType.name() + ":" +schedule.getStartDate(), schedule.getUserCoupleToken().getMyFcmToken(), object);
            return;
        }
        redisTemplate.opsForHash().put(keyType.name(), id, object);
    }
    
}