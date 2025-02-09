package com.ssafy.schedule.application.outputport;

/**
 * 작성자   : 이병수
 * 작성날짜 : 2024-11-12
 * 설명    :
 */
public interface FCMOutputPort {
    void send(String token, String title, String body);
}
