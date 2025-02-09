package com.ssafy.product.product.service;

import com.ssafy.product.product.dto.request.ProductRegistRequestDto;
import com.ssafy.product.product.dto.request.ReviewRequestDto;
import weddy.commonlib.dto.response.ProductResponseDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.multipart.MultipartFile;
import weddy.commonlib.dto.response.ReviewResponseDto;

import java.util.List;

public interface ProductService {
     List<ProductResponseDto> getList();
     ProductResponseDto detailProduct(final Long id);
     ProductResponseDto registProduct(final ProductRegistRequestDto productRegistRequestDto, final List<MultipartFile> images, final HttpServletRequest request);
     List<ReviewResponseDto> reviewList(final Long productId);
     ReviewResponseDto registerReview(final ReviewRequestDto reviewRequestDto, final Long productId, final HttpServletRequest request);
     List<ProductResponseDto> rankingList();
}
