package com.ssafy.product.product.dto.response;

import com.ssafy.product.product.constant.ProductType;
import com.ssafy.product.product.domain.Product;
import com.ssafy.product.product.domain.ProductImage;
import lombok.Builder;

import java.util.ArrayList;
import java.util.List;

@Builder
public record ProductResponseDto(Long id,
                                 String name,
                                 ProductType type,
                                 int price,
                                 String address,
                                 List<ProductImageResponseDto> images) ***REMOVED***

    public static ProductResponseDto registProductResponseDto(Product product, List<ProductImage> images) ***REMOVED***
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
