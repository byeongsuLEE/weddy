package com.example.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "User")
@Getter
@Setter
@Data
public class UserEntity ***REMOVED***

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
***REMOVED***
