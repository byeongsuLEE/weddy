package com.example.user.dto;

import java.util.Map;

public class NaverResponse implements OAuth2Response ***REMOVED***

    private final Map<String, Object> attribute;

    public NaverResponse(Map<String, Object> attribute) ***REMOVED***
        this.attribute = (Map<String, Object>) attribute.get("response");
    ***REMOVED***

    @Override
    public String getProvider() ***REMOVED***
        return "naver";
    ***REMOVED***

    @Override
    public String getProviderId() ***REMOVED***
        return attribute.get("id").toString();
    ***REMOVED***

    @Override
    public String getEmail() ***REMOVED***
        return attribute.get("email").toString();
    ***REMOVED***

    @Override
    public String getName() ***REMOVED***
        return attribute.get("name").toString();
    ***REMOVED***

    @Override
    public String getPicture() ***REMOVED***
        return "";
    ***REMOVED***
***REMOVED***
