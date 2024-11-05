package com.example.user.service;


import com.example.user.dto.*;
import com.example.user.entity.UserEntity;
import com.example.user.repository.UserRepository;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import java.security.SecureRandom;


@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService ***REMOVED***

    private final UserRepository userRepository;

    public CustomOAuth2UserService(UserRepository userRepository) ***REMOVED***
        this.userRepository = userRepository;
    ***REMOVED***

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException ***REMOVED***
        OAuth2User oAuth2User = super.loadUser(userRequest);

        if (oAuth2User == null) ***REMOVED***
            throw new OAuth2AuthenticationException("OAuth2User가 null입니다. 사용자 정보 로딩 실패");
        ***REMOVED***

        System.out.println(oAuth2User.toString()+"\n"+"\n");
        System.out.println("Client Registration: " + userRequest.getClientRegistration());
        System.out.println("Access Token: " + userRequest.getAccessToken().getTokenValue());

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        OAuth2Response oAuth2Response = null;
        System.out.println(registrationId);
        if (registrationId.equals("naver")) ***REMOVED***
            oAuth2Response = new NaverResponse(oAuth2User.getAttributes());
        ***REMOVED*** else if (registrationId.equals("google")) ***REMOVED***
            oAuth2Response = new GoogleResponse(oAuth2User.getAttributes());
        ***REMOVED*** else return null;
        String socialId = oAuth2Response.getProvider() + " " + oAuth2Response.getProviderId();
        UserEntity existData = userRepository.findBySocialId(socialId);

        if (existData == null) ***REMOVED***

            String randomCode = generateRandomCode(6);

            UserEntity userEntity = new UserEntity();
            userEntity.setSocialId(socialId);
            userEntity.setName(oAuth2Response.getName());
            userEntity.setEmail(oAuth2Response.getEmail());
            userEntity.setPicture(oAuth2Response.getPicture());
            userEntity.setCoupleCode(randomCode);

            userRepository.save(userEntity);
            UserDTO userDTO = new UserDTO();
            userDTO.setId(userEntity.getId());
            userDTO.setSocialId(socialId);
            userDTO.setName(oAuth2Response.getName());
            userDTO.setCoupleCode(randomCode);
            userDTO.setPicture(oAuth2Response.getPicture());

            return new CustomOAuth2User(userDTO);
        ***REMOVED*** else ***REMOVED***

            existData.setEmail(oAuth2Response.getEmail());
            existData.setName(oAuth2Response.getName());

            userRepository.save(existData);

            UserDTO userDTO = new UserDTO();
            userDTO.setId(existData.getId());
            userDTO.setSocialId(existData.getSocialId());
            userDTO.setName(oAuth2Response.getName());
            userDTO.setPicture(oAuth2Response.getPicture());

            return new CustomOAuth2User(userDTO);
        ***REMOVED***

    ***REMOVED***
    public static String generateRandomCode(int length) ***REMOVED***
        SecureRandom random = new SecureRandom();
        StringBuilder code = new StringBuilder();
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (int i = 0; i < length; i++) ***REMOVED***
            int index = random.nextInt(characters.length());
            code.append(characters.charAt(index));
        ***REMOVED***

        return code.toString();
    ***REMOVED***

***REMOVED***
