package com.example.user.user.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDTO {
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
}
