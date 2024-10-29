package com.example.user.service;


import com.example.user.dto.*;
import com.example.user.entity.UserEntity;
import com.example.user.repository.UserRepository;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

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

        System.out.println(oAuth2User);
        System.out.println("Client Registration: " + userRequest.getClientRegistration());
        System.out.println("Access Token: " + userRequest.getAccessToken().getTokenValue());

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        OAuth2Response oAuth2Response = null;
        System.out.println(registrationId);
        if (registrationId.equals("naver")) ***REMOVED***
            System.out.println("네이버입니다");
            oAuth2Response = new NaverResponse(oAuth2User.getAttributes());
            System.out.println("네이버입니다");
        ***REMOVED*** else if (registrationId.equals("google")) ***REMOVED***
            System.out.println("구글입니다");
            oAuth2Response = new GoogleResponse(oAuth2User.getAttributes());
            System.out.println("구글입니다");
        ***REMOVED*** else return null;
        String username = oAuth2Response.getProvider() + " " + oAuth2Response.getProviderId();
        UserEntity existData = userRepository.findByUsername(username);

        if (existData == null) ***REMOVED***
            UserEntity userEntity = new UserEntity();
            userEntity.setUsername(username);
            userEntity.setName(oAuth2Response.getName());
            userEntity.setEmail(oAuth2Response.getEmail());
            userEntity.setRole("ROLE_USER");

            userRepository.save(userEntity);
            UserDTO userDTO = new UserDTO();
            userDTO.setUsername(username);
            userDTO.setName(oAuth2Response.getName());
            userDTO.setRole("ROLE_USER");

            return new CustomOAuth2User(userDTO);
        ***REMOVED*** else ***REMOVED***

            existData.setEmail(oAuth2Response.getEmail());
            existData.setName(oAuth2Response.getName());

            userRepository.save(existData);

            UserDTO userDTO = new UserDTO();
            userDTO.setUsername(existData.getUsername());
            userDTO.setName(oAuth2Response.getName());
            userDTO.setRole(existData.getRole());

            return new CustomOAuth2User(userDTO);
        ***REMOVED***

    ***REMOVED***
***REMOVED***
