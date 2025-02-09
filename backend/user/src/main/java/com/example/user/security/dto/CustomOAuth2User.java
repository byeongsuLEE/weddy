package com.example.user.security.dto;

import com.example.user.common.dto.UserDTO;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

public class CustomOAuth2User implements OAuth2User {

    private final UserDTO userDTO;
    public CustomOAuth2User(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return Map.of();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
//        Collection<GrantedAuthority> collection = new ArrayList<>();
//
//        collection.add(new GrantedAuthority() {
//            @Override
//            public String getAuthority() {
//                return userDTO.getRole();
//            }
//        });
//        return collection;
        return new ArrayList<>();
    }

    @Override
    public String getName() {
        return userDTO.getName();
    }

    public Long getUserId(){
        return userDTO.getId();
    }

    public String getCode(){
        return userDTO.getCoupleCode();
    }

    public String getPicture(){return userDTO.getPicture();}
}
