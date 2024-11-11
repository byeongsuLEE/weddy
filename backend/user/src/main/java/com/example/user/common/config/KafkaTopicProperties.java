package com.example.user.common.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "producers")
public class KafkaTopicProperties ***REMOVED***

    private Topic cartRequestTopic;
    private Topic cartResponseTopic;

    // Topic 중첩 클래스
    public static class Topic ***REMOVED***
        private String name;

        // Getter와 Setter
        public String getName() ***REMOVED***
            return name;
        ***REMOVED***

        public void setName(String name) ***REMOVED***
            this.name = name;
        ***REMOVED***
    ***REMOVED***

    // Getter와 Setter
    public Topic getCartRequestTopic() ***REMOVED***
        return cartRequestTopic;
    ***REMOVED***

    public void setCartRequestTopic(Topic cartRequestTopic) ***REMOVED***
        this.cartRequestTopic = cartRequestTopic;
    ***REMOVED***

    public Topic getCartResponseTopic() ***REMOVED***
        return cartResponseTopic;
    ***REMOVED***

    public void setCartResponseTopic(Topic cartResponseTopic) ***REMOVED***
        this.cartResponseTopic = cartResponseTopic;
    ***REMOVED***
***REMOVED***
