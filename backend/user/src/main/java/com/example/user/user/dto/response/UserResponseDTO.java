package com.example.user.user.dto.response;

import com.example.user.user.entity.UserEntity;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@Data
@Builder
public class UserResponseDTO {
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

    // UserEntity로부터 UserResponseDTO 생성하는 정적 메서드
    public static UserResponseDTO fromEntity(UserEntity userEntity) {
        return UserResponseDTO.builder()
                .id(userEntity.getId())
                .coupleCode(userEntity.getCoupleCode())
                .socialId(userEntity.getSocialId())
                .name(userEntity.getName())
                .email(userEntity.getEmail())
                .address(userEntity.getAddress())
                .phone(userEntity.getPhone())
                .picture(userEntity.getPicture())
                .date(userEntity.getDate())
                .otherId(userEntity.getOtherId())
                .build();
    }
}
