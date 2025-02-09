package com.ssafy.product.product.domain;

import com.ssafy.product.product.dto.request.VenderRequestDto;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class Vender {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true, length = 30)
    private String businessNumber;

    @Column(nullable = false, length = 30)
    private String phone;

    @Column(nullable = false, length = 100)
    private String address;

    private String imageUrl;

    private Long userId;

    @OneToMany(mappedBy = "vender", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Product> products;


    @Builder
    public Vender (VenderRequestDto venderRequestDto, String s3Url, Long userId){
        this.name = venderRequestDto.name();
        this.businessNumber = venderRequestDto.businessNumber();
        this.phone = venderRequestDto.phone();
        this.address = venderRequestDto.address();
        this.imageUrl = s3Url;
        this.userId = userId;
    }
}
