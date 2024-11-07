package com.example.user.user.service;

import com.example.user.common.dto.ApiResponse;
import com.example.user.common.dto.ErrorCode;
import com.example.user.common.exception.UserNotFoundException;
import com.example.user.common.dto.ErrorCode;
import com.example.user.common.exception.UserTokenNotFoundException;
import com.example.user.common.service.GCSImageService;
import com.example.user.user.dto.response.UserCoupleTokenDto;
import com.example.user.user.dto.response.UserResponseDTO;
import com.example.user.user.entity.UserEntity;
import com.example.user.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class UserService ***REMOVED***

    private final UserRepository userRepository;
    private final GCSImageService gcsImageService;
    public UserService(UserRepository userRepository, GCSImageService gcsImageService)***REMOVED***
        this.userRepository = userRepository;
        this.gcsImageService = gcsImageService;
    ***REMOVED***

    public List<UserResponseDTO> userInfo(UserEntity user) ***REMOVED***
        // userEntity와 otherUserEntity를 각각 조회하며, 없으면 UserNotFoundException 발생
        UserEntity userEntity = userRepository.findById(user.getId())
                .orElseThrow(() -> new UserNotFoundException(ErrorCode.USER_NOT_FOUND));
        UserEntity otherUserEntity = null;
        if(user.getOtherId() != null)***REMOVED***
            otherUserEntity = userRepository.findById(user.getOtherId())
                    .orElse(null); // otherUserEntity는 없을 수 있으므로 예외를 발생시키지 않고 null을 허용
        ***REMOVED***

        List<UserResponseDTO> responseList = new ArrayList<>();

        // userEntity는 항상 존재하므로 리스트에 추가
        responseList.add(UserResponseDTO.fromEntity(userEntity));

        // otherUserEntity가 존재할 경우에만 리스트에 추가
        if (otherUserEntity != null) ***REMOVED***
            responseList.add(UserResponseDTO.fromEntity(otherUserEntity));
        ***REMOVED***

        return responseList;
    ***REMOVED***




    public UserResponseDTO coupleCode(String coupleCode)***REMOVED***
        UserResponseDTO userResponseDTO = UserResponseDTO.builder()
                .coupleCode(coupleCode)
                .build();

        return userResponseDTO;
    ***REMOVED***

    public void updateUserInfo(Long id, Map<String, Object> info) ***REMOVED***
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        log.info("Received update info: ***REMOVED******REMOVED***", info);

        if (userEntity == null) ***REMOVED***
            throw new RuntimeException("User not found");
        ***REMOVED***

        if (info.get("phone") != null && !info.get("phone").toString().trim().isEmpty()) ***REMOVED***
            userEntity.setPhone(info.get("phone").toString());
        ***REMOVED***

        if (info.get("name") != null && !info.get("name").toString().trim().isEmpty()) ***REMOVED***
            userEntity.setName(info.get("name").toString());
        ***REMOVED***

        if (info.get("address") != null && !info.get("address").toString().trim().isEmpty()) ***REMOVED***
            userEntity.setAddress(info.get("address").toString());
        ***REMOVED***

        if (info.get("email") != null && !info.get("email").toString().trim().isEmpty()) ***REMOVED***
            userEntity.setEmail(info.get("email").toString());
        ***REMOVED***

        if (info.get("picture") != null && info.get("picture") instanceof MultipartFile) ***REMOVED***
            MultipartFile pictureFile = (MultipartFile) info.get("picture");
            try ***REMOVED***
                String pictureUrl = gcsImageService.uploadImage(pictureFile); // GCS에 업로드하고 URL 반환
                userEntity.setPicture(pictureUrl); // URL을 picture 필드에 저장
            ***REMOVED*** catch (Exception e) ***REMOVED***
                throw new RuntimeException("Failed to upload picture", e);
            ***REMOVED***
        ***REMOVED***

        if (info.get("date") != null && !info.get("date").toString().trim().isEmpty()) ***REMOVED***
            log.info(info.get("date").toString());
            userEntity.setDate(LocalDate.parse(info.get("date").toString()));
        ***REMOVED***

        userRepository.save(userEntity);
    ***REMOVED***


    public UserResponseDTO connectCoupleCode(String coupleCode, Long id) ***REMOVED***
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        UserEntity otheruserEntity = userRepository.findByCoupleCode(coupleCode).orElse(null);

        if (userEntity == null || otheruserEntity == null) ***REMOVED***
            throw new UserNotFoundException(ErrorCode.USER_NOT_FOUND);
        ***REMOVED***

        // coupleCode 업데이트 및 저장
        userEntity.setCoupleCode(coupleCode);
        userEntity.setOtherId(otheruserEntity.getId());
        userRepository.save(userEntity);
        otheruserEntity.setOtherId(userEntity.getId());
        userRepository.save(otheruserEntity);


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
    ***REMOVED***

    public UserCoupleTokenDto getFcmToken(String coupleCode, Long myUserId) ***REMOVED***

        List<UserEntity> userEntity = userRepository.findByCoupleCode(coupleCode);
        if (userEntity == null) ***REMOVED***
             throw new UserTokenNotFoundException(ErrorCode.USER_TOKEN_NOT_FOUND);
        ***REMOVED***

        String myToken = null;
        String coupleToken =null ;

        for(UserEntity user : userEntity)***REMOVED***
            if(user.getId().equals(myUserId))***REMOVED***
                myToken = user.getFcmToken();
            ***REMOVED***else***REMOVED***
                coupleToken= user.getFcmToken();
            ***REMOVED***
        ***REMOVED***

        return UserCoupleTokenDto.builder()
                .myFcmToken(myToken)
                .coupleFcmToken(coupleToken)
                .build();


    ***REMOVED***
***REMOVED***
