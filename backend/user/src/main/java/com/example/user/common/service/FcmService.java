package com.example.user.common.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import org.springframework.stereotype.Service;

@Service
public class FcmService ***REMOVED***

    public void sendPushNotification(String token, String title, String body) ***REMOVED***
        try ***REMOVED***
            // 알림 메시지 생성
            System.out.println("token: " + token);
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
            System.out.println("Successfully sent message: " + response);

        ***REMOVED*** catch (Exception e) ***REMOVED***
            System.err.println("Error sending FCM message: " + e.getMessage());
        ***REMOVED***
    ***REMOVED***
***REMOVED***
