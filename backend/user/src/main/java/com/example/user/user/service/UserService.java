package com.example.user.user.service;

import com.example.user.common.dto.ApiResponse;
import com.example.user.common.service.GCSImageService;
import com.example.user.common.dto.UserDTO;
import com.example.user.user.dto.response.UserResponseDTO;
import com.example.user.user.entity.UserEntity;
import com.example.user.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
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

    public UserResponseDTO userInfo(Long userId) ***REMOVED***
        UserEntity userEntity = userRepository.findById(userId).orElse(null);

        if (userEntity == null) ***REMOVED***
            // 원하는 방식으로 예외를 처리하거나 null을 반환할 수 있습니다.
            return null;
        ***REMOVED***

        UserResponseDTO response = UserResponseDTO.builder()
                .id(userEntity.getId())
                .coupleCode(userEntity.getCoupleCode())
                .socialId(userEntity.getSocialId())
                .name(userEntity.getName())
                .email(userEntity.getEmail())
                .address(userEntity.getAddress())
                .phone(userEntity.getPhone())
                .picture(userEntity.getPicture())
                .date(userEntity.getDate())
                .build();

        return response;
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

        // userEntity가 null일 경우 예외 처리나 반환 방식 결정
        if (userEntity == null || otheruserEntity == null) ***REMOVED***
            // 예외를 던지거나 null을 반환하는 등의 처리
            return null;
        ***REMOVED***

        // coupleCode 업데이트 및 저장
        userEntity.setCoupleCode(coupleCode);
        userRepository.save(userEntity);


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

***REMOVED***
