package com.ssafy.product.product.domain;

import com.ssafy.product.product.constant.ProductType;
import com.ssafy.product.product.dto.request.ProductRegistRequestDto;
import com.ssafy.product.product.dto.response.ProductImageResponseDto;
import com.ssafy.product.product.dto.response.ProductResponseDto;
import jakarta.persistence.*;
import lombok.*;

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

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<Review> reviews;

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

    @Builder
    public Product(ProductRegistRequestDto productRegistRequestDto)***REMOVED***
        this.name = productRegistRequestDto.name();
        this.type = productRegistRequestDto.type();
        this.price = productRegistRequestDto.price();
        this.address = productRegistRequestDto.address();
    ***REMOVED***

    public ProductResponseDto registProductResponseDto(Product product, List<ProductImage> images) ***REMOVED***
        List<ProductImageResponseDto> imagesDto = images.stream()
                .map(image -> ProductImageResponseDto.builder()
                        .imageUrl(image.getImageUrl())
                        .build())
                .toList();
        return ProductResponseDto.builder()
                .id(product.getId())
                .type(product.getType())
                .address(product.getAddress())
                .name(product.getName())
                .price(product.getPrice())
                .images(imagesDto)
                .build();
    ***REMOVED***
***REMOVED***
