package com.ssafy.product.product.dto.request;

import com.ssafy.product.product.domain.ProductImage;
import lombok.Builder;
import weddy.commonlib.constant.ProductType;

import java.util.List;

@Builder
public record ProductRegistRequestDto(String name,
                                      ProductType type,
                                      int price,
                                      String address,
                                      List<ProductImage> images) ***REMOVED***
***REMOVED***
