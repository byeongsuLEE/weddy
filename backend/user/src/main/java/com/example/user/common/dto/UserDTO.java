package com.example.user.common.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;
    private String coupleCode;
    private String name;
    private String socialId;
    private String adress;
    private String phone;
    private String picture;
}
