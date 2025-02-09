package com.example.user.user.service;

import com.example.user.common.dto.ErrorCode;
import com.example.user.common.exception.JsonParsingException;
import com.example.user.common.exception.UserNotFoundException;
import com.example.user.common.exception.UserTokenNotFoundException;
import com.example.user.common.service.GCSImageService;
import com.example.user.common.service.FcmService;
import com.example.user.user.dto.response.UserCoupleTokenDto;
import com.example.user.user.dto.response.UserResponseDTO;
import com.example.user.user.entity.UserEntity;
import com.example.user.user.repository.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class UserService {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final KafkaTemplate<String, Object> kafkaTemplate;
    private final UserRepository userRepository;
    private final GCSImageService gcsImageService;
    private final FcmService fcmService;
    private final RedisTemplate<String, String> redisTemplate;

    public UserService(KafkaTemplate<String, Object> kafkaTemplate, UserRepository userRepository, GCSImageService gcsImageService, FcmService fcmService, @Qualifier("redisUserTemplate") RedisTemplate<String, String> redisTemplate){
        this.kafkaTemplate = kafkaTemplate;
        this.userRepository = userRepository;
        this.gcsImageService = gcsImageService;
        this.fcmService = fcmService;
        this.redisTemplate = redisTemplate;
    }
    @Value("${producers.couplecode.name}")
    private final String coupleTopic = "coupleTopic";

    public List<UserResponseDTO> userInfo(UserEntity user) {
        // userEntity와 otherUserEntity를 각각 조회하며, 없으면 UserNotFoundException 발생
        UserEntity userEntity = userRepository.findById(user.getId())
                .orElseThrow(() -> new UserNotFoundException(ErrorCode.USER_NOT_FOUND));
        UserEntity otherUserEntity = null;
        if(user.getOtherId() != null){
            otherUserEntity = userRepository.findById(user.getOtherId())
                    .orElse(null); // otherUserEntity는 없을 수 있으므로 예외를 발생시키지 않고 null을 허용
        }

        List<UserResponseDTO> responseList = new ArrayList<>();

        // userEntity는 항상 존재하므로 리스트에 추가
        responseList.add(UserResponseDTO.fromEntity(userEntity));

        // otherUserEntity가 존재할 경우에만 리스트에 추가
        if (otherUserEntity != null) {
            responseList.add(UserResponseDTO.fromEntity(otherUserEntity));
        }

        return responseList;
    }

    public UserResponseDTO coupleCode(String coupleCode){
        UserResponseDTO userResponseDTO = UserResponseDTO.builder()
                .coupleCode(coupleCode)
                .build();

        return userResponseDTO;
    }

    public void updateUserInfo(Long id, Map<String, Object> info) {
        UserEntity existingUser = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        log.info("Received update info: {}", info);

        // 기존 엔티티의 필드를 복사하고 필요 시 새로운 값을 설정
        UserEntity.UserEntityBuilder builder = existingUser.toBuilder();

        // null이 아닌 값만 업데이트
        builder.phone(info.get("phone") != null ? info.get("phone").toString() : existingUser.getPhone());
        builder.name(info.get("name") != null ? info.get("name").toString() : existingUser.getName());
        builder.address(info.get("address") != null ? info.get("address").toString() : existingUser.getAddress());
        builder.email(info.get("email") != null ? info.get("email").toString() : existingUser.getEmail());

        if (info.get("picture") != null && info.get("picture") instanceof MultipartFile) {
            MultipartFile pictureFile = (MultipartFile) info.get("picture");
            try {
                String pictureUrl = gcsImageService.uploadImage(pictureFile);
                builder.picture(pictureUrl);
            } catch (Exception e) {
                throw new RuntimeException("Failed to upload picture", e);
            }
        } else {
            builder.picture(existingUser.getPicture());
        }

        builder.date(info.get("date") != null ? LocalDate.parse(info.get("date").toString()) : existingUser.getDate());

        // 새 엔티티를 저장하여 기존 필드는 유지하고 필요한 필드만 업데이트
        UserEntity updatedUser = builder.build();
        userRepository.save(updatedUser);
    }



    public UserResponseDTO connectCoupleCode(String coupleCode, Long id) throws JsonProcessingException {
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        int count = userRepository.countByCoupleCode(coupleCode);
        String oldCoupleCode = userRepository.findById(id).get().getCoupleCode();
        if(count != 1) throw new UserNotFoundException(ErrorCode.USER_NOT_FOUND);
        UserEntity otheruserEntity = userRepository.findByCoupleCode(coupleCode).get(0); // 이부분 내가 바꿨으니 확인 해보셈

        if (userEntity == null || otheruserEntity == null) {
            throw new UserNotFoundException(ErrorCode.USER_NOT_FOUND);
        }
        //userEntity 전송용 저장
        Map<String, String> userData = new HashMap<>();
        userData.put("oldCoupleCode", oldCoupleCode);
        userData.put("newCoupleCode", coupleCode);

        // coupleCode 업데이트 및 저장
        userEntity = userEntity.toBuilder()
                .coupleCode(coupleCode)
                .otherId(otheruserEntity.getId())
                .build();
        userRepository.save(userEntity);
        otheruserEntity = otheruserEntity.toBuilder()
                .otherId(userEntity.getId())
                .build();
        userRepository.save(otheruserEntity);

        kafkaTemplate.send(coupleTopic,userData);

        String beforeMyCoupleCode=  userEntity.getCoupleCode();

        String myFcmToken = userEntity.getFcmToken();

        String hashKey = "USER:" + beforeMyCoupleCode;
        //커플 코드 redis 추가 및 삭제
        if (redisTemplate.hasKey(hashKey))
            redisTemplate.delete(hashKey);
//        redisTemplate.opsForHash().delete("USER:"+beforeMyCoupleCode);
        redisTemplate.opsForHash().put("USER:"+coupleCode,String.valueOf(id),myFcmToken);

        // UserResponseDTO 빌드 및 반환
        return UserResponseDTO.builder()
                .id(otheruserEntity.getId())
                .coupleCode(otheruserEntity.getCoupleCode())
                .socialId(otheruserEntity.getSocialId())
                .name(otheruserEntity.getName())
                .email(otheruserEntity.getEmail())
                .address(otheruserEntity.getAddress())
                .phone(otheruserEntity.getPhone())
                .picture(otheruserEntity.getPicture())
                .date(otheruserEntity.getDate())
                .build();
    }

    /**
     *  토큰 가져오기
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-11-07
     * @ 설명     : 커플 코드를 통해서 커플들의 fcmadapter 토큰을 가져오기

     * @param coupleCode
     * @param myUserId
     * @return
     */
    @Transactional(readOnly = true)
    public UserCoupleTokenDto getFcmToken(String coupleCode, Long myUserId) {
        List<UserEntity> userEntity = getUserEntities(coupleCode);
        return getUserCoupleTokenDto(myUserId, userEntity);

    }

    /**
     * fcmadapter 토큰 저장
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-11-07
     * @ 설명     : fcmadapter 토큰 저장

     * @param userId
     * @param fcmToken
     */
    @Transactional
    public void setFcmToken(Long userId, String fcmToken) {
        UserEntity userEntity = getUserEntity(userId);
        String beforeFcmToken = userEntity.getFcmToken();
        userEntity.updateFcmToken(fcmToken);
//        fcmService.sendPushNotification(fcmToken, "FCM 토큰 저장 성공", "FCM 토큰 저장 성공");

        String coupleCode = userEntity.getCoupleCode();

        redisTemplate.opsForHash().put("USER:"+coupleCode, userId.toString(), fcmToken);


    }



    private UserEntity getUserEntity(Long userId) {
        UserEntity userEntity = userRepository.findById(userId).orElse(null);
        if (userEntity == null) {
            throw new UserNotFoundException(ErrorCode.USER_NOT_FOUND);
        }
        return userEntity;
    }

    private List<UserEntity> getUserEntities(String coupleCode) {
        List<UserEntity> userEntity = userRepository.findByCoupleCode(coupleCode);
        if (userEntity == null) {
             throw new UserTokenNotFoundException(ErrorCode.USER_TOKEN_NOT_FOUND);
        }
        return userEntity;
    }

    private static UserCoupleTokenDto getUserCoupleTokenDto(Long myUserId, List<UserEntity> userEntity) {
        String myToken = null;
        String coupleToken =null ;

        for(UserEntity user : userEntity){
            if(user.getId().equals(myUserId)){
                myToken = user.getFcmToken();
            }else{
                coupleToken = user.getFcmToken();
            }
        }

        return UserCoupleTokenDto.builder()
                .myFcmToken(myToken)
                .coupleFcmToken(coupleToken)
                .build();
    }
}
// 테스트용 주석 2
