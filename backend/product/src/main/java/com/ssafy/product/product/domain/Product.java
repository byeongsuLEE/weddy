package com.ssafy.product.product.domain;

import com.ssafy.product.product.constant.ProductType;
import com.ssafy.product.product.dto.response.ProductImageResponseDto;
import com.ssafy.product.product.dto.response.ProductResponseDto;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class Product ***REMOVED***
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 20)
    private String name;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ProductType type;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false, length = 100)
    private String address;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ProductImage> productImages;

    public ProductResponseDto getProduct(Product product) ***REMOVED***
        List<ProductImageResponseDto> images = product.productImages.stream()
                .map(image -> ProductImageResponseDto.builder()
                        .imageUrl(image.getImageUrl())
                        .build())
                .toList();
        return ProductResponseDto.builder()
                .id(product.id)
                .name(product.name)
                .type(product.type)
                .price(product.price)
                .address(product.address)
                .images(images)
                .build();
    ***REMOVED***
***REMOVED***
