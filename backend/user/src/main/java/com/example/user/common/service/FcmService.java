package com.example.user.common.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class FcmService {

    public void sendPushNotification(String token, String title, String body) {
        try {
            // 알림 메시지 생성
            Notification notification = Notification.builder()
                    .setTitle(title)
                    .setBody(body)
                    .build();

            Message message = Message.builder()
                    .setToken(token)
                    .setNotification(notification)
                    .build();

            // FCM으로 메시지 전송
            String response = FirebaseMessaging.getInstance().send(message);
           log.info("Successfully sent message: " + response);

        } catch (Exception e) {
            log.info("Error sending FCM message: " + e.getMessage());
        }
    }
}
