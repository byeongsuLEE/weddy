package com.ssafy.product.product.repository;

import com.ssafy.product.product.domain.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> ***REMOVED***
    List<ProductImage> findAllByProductId(Long productId);
***REMOVED***
