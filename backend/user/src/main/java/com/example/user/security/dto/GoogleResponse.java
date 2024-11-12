package com.example.user.security.dto;

import java.util.Map;

public class GoogleResponse implements OAuth2Response***REMOVED***

    private final Map<String, Object> attribute;

    public GoogleResponse(Map<String, Object> attribute) ***REMOVED***

        this.attribute = attribute;
    ***REMOVED***

    @Override
    public String getProvider() ***REMOVED***

        return "google";
    ***REMOVED***

    @Override
    public String getProviderId() ***REMOVED***

        return attribute.get("sub").toString();
    ***REMOVED***

    @Override
    public String getEmail() ***REMOVED***

        return attribute.get("email").toString();
    ***REMOVED***

    @Override
    public String getName() ***REMOVED***

        return attribute.get("name").toString();
    ***REMOVED***

    public String getPicture()***REMOVED***
        return attribute.get("picture").toString();
    ***REMOVED***
***REMOVED***