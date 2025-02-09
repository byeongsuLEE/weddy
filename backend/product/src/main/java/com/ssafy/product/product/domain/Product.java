package com.ssafy.product.product.domain;

import com.ssafy.product.product.dto.request.ProductRegistRequestDto;
import jakarta.persistence.*;
import lombok.*;
import weddy.commonlib.constant.ProductType;
import weddy.commonlib.dto.response.ProductImageResponseDto;
import weddy.commonlib.dto.response.ProductResponseDto;

import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class Product {
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

    @Column
    private String description;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ProductImage> productImages;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<Review> reviews;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vender_id")
    private Vender vender;

    public ProductResponseDto getProduct(Product product) {
        List<ProductImageResponseDto> images = product.productImages.stream()
                .map(image -> ProductImageResponseDto.builder()
                        .imageUrl(image.getImageUrl())
                        .build())
                .toList();
        return ProductResponseDto.builder()
                .id(product.id)
                .name(product.name)
                .price(product.price)
                .type(product.type)
                .address(product.address)
                .description(product.description)
                .images(images)
                .vendorName(product.vender.getName())
                .vendorPhone(product.vender.getPhone())
                .vendorAddress(product.vender.getAddress())
                .vendorId(product.vender.getId())
                .build();
    }

    @Builder
    public Product(ProductRegistRequestDto productRegistRequestDto, Vender vender){
        this.name = productRegistRequestDto.name();
        this.type = productRegistRequestDto.type();
        this.price = productRegistRequestDto.price();
        this.address = productRegistRequestDto.address();
        this.vender = vender;
    }

    public ProductResponseDto registProductResponseDto(Product product, List<ProductImage> images) {
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
                .vendorName(product.vender.getName())
                .vendorPhone(product.vender.getPhone())
                .vendorAddress(product.vender.getAddress())
                .vendorId(product.vender.getId())
                .build();
    }
}
