package com.example.user.common.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "producers")
public class KafkaTopicProperties {

    private Topic cartRequestTopic;
    private Topic cartResponseTopic;

    // Topic 중첩 클래스
    public static class Topic {
        private String name;

        // Getter와 Setter
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }

    // Getter와 Setter
    public Topic getCartRequestTopic() {
        return cartRequestTopic;
    }

    public void setCartRequestTopic(Topic cartRequestTopic) {
        this.cartRequestTopic = cartRequestTopic;
    }

    public Topic getCartResponseTopic() {
        return cartResponseTopic;
    }

    public void setCartResponseTopic(Topic cartResponseTopic) {
        this.cartResponseTopic = cartResponseTopic;
    }
}
