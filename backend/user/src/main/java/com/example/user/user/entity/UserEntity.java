package com.example.user.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "User")
@Getter
@NoArgsConstructor  // JPA가 기본 생성자를 필요로 하므로 추가
@Builder(toBuilder = true)  // toBuilder = true 옵션을 사용하여 기존 객체 기반 빌더 생성 가능
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String coupleCode;
    private String socialId;
    private String name;
    private String email;
    private String address;
    private String phone;
    private String picture;
    private LocalDate date;
    private Long otherId;
    private String fcmToken;

    public void updateFcmToken(String fcmToken) {
        this.fcmToken = fcmToken;
    }

    @Builder
    public UserEntity(Long id, String coupleCode, String socialId, String name, String email,
                      String address, String phone, String picture, LocalDate date,
                      Long otherId, String fcmToken) {
        this.id = id;
        this.coupleCode = coupleCode;
        this.socialId = socialId;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.picture = picture;
        this.date = date;
        this.otherId = otherId;
        this.fcmToken = fcmToken;
    }
}
