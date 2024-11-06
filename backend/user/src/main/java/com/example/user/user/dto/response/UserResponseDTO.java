package com.example.user.user.dto.response;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@Data
@Builder
public class UserResponseDTO ***REMOVED***
    private Long id;
    private String coupleCode;
    private String socialId;
    private String name;
    private String email;
    private String address;
    private String phone;
    private String picture;
    private LocalDate date;
***REMOVED***
