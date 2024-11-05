package com.example.user.dto;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

public class CustomOAuth2User implements OAuth2User ***REMOVED***

    private final UserDTO userDTO;
    public CustomOAuth2User(UserDTO userDTO) ***REMOVED***
        this.userDTO = userDTO;
    ***REMOVED***

    @Override
    public Map<String, Object> getAttributes() ***REMOVED***
        return Map.of();
    ***REMOVED***

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() ***REMOVED***
//        Collection<GrantedAuthority> collection = new ArrayList<>();
//
//        collection.add(new GrantedAuthority() ***REMOVED***
//            @Override
//            public String getAuthority() ***REMOVED***
//                return userDTO.getRole();
//            ***REMOVED***
//        ***REMOVED***);
//        return collection;
        return new ArrayList<>();
    ***REMOVED***

    @Override
    public String getName() ***REMOVED***
        return userDTO.getName();
    ***REMOVED***

    public Long getUserId()***REMOVED***
        return userDTO.getId();
    ***REMOVED***

    public String getCode()***REMOVED***
        return userDTO.getCoupleCode();
    ***REMOVED***

    public String getPicture()***REMOVED***return userDTO.getPicture();***REMOVED***
***REMOVED***
