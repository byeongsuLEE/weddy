package com.example.user.service;

import com.example.user.common.service.GCSImageService;
import com.example.user.dto.APIResponse;
import com.example.user.dto.UserDTO;
import com.example.user.dto.response.UserResponseDTO;
import com.example.user.entity.UserEntity;
import com.example.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Map;

@Service
public class UserService ***REMOVED***

    private final UserRepository userRepository;
    private final GCSImageService gcsImageService;
    public UserService(UserRepository userRepository, GCSImageService gcsImageService)***REMOVED***
        this.userRepository = userRepository;
        this.gcsImageService = gcsImageService;
    ***REMOVED***

    public APIResponse<UserEntity> userInfo(Long userId)***REMOVED***
        APIResponse response = APIResponse.builder()
                .status(200)
                .data(userRepository.findById(userId)
                        .orElseThrow(()->new RuntimeException("user not found")))
                .build();
        return response;
    ***REMOVED***

    public UserResponseDTO coupleCode(String coupleCode)***REMOVED***
        UserResponseDTO userResponseDTO = UserResponseDTO.builder()
                .coupleCode(coupleCode)
                .build();

        return userResponseDTO;
    ***REMOVED***

//    public void patchUser(UserEntity userEntity)***REMOVED***
//        userRepository.save(userEntity);
//    ***REMOVED***



    public void updateUserInfo(Long id, Map<String, Object> info) ***REMOVED***
        UserEntity userEntity = userRepository.findById(id).orElse(null);

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
            ***REMOVED*** catch (IOException e) ***REMOVED***
                throw new RuntimeException("Failed to upload picture", e);
            ***REMOVED***
        ***REMOVED***

        if (info.get("Date") != null && !info.get("Date").toString().trim().isEmpty()) ***REMOVED***
            userEntity.setDate(LocalDate.parse(info.get("Date").toString()));
        ***REMOVED***

        userRepository.save(userEntity);
    ***REMOVED***


    public UserDTO connectCoupleCode(String coupleCode,Long id)***REMOVED***
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        assert userEntity != null;
        userEntity.setCoupleCode(coupleCode);
        userRepository.save(userEntity);
        return UserDTO.builder()
                .name(userEntity.getName())
                .picture(userEntity.getPicture())
                .build();
    ***REMOVED***
***REMOVED***
