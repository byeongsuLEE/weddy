package com.ssafy.product.product.service;

import com.ssafy.product.product.dto.request.ProductRegistRequestDto;
import com.ssafy.product.product.dto.request.ReviewRequestDto;
import com.ssafy.product.product.dto.response.ProductResponseDto;
import com.ssafy.product.product.dto.response.ReviewResponseDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService ***REMOVED***
     List<ProductResponseDto> getList();
     ProductResponseDto detailProduct(final Long id);
     ProductResponseDto registProduct(final ProductRegistRequestDto productRegistRequestDto, final List<MultipartFile> images);
     List<ReviewResponseDto> reviewList(final Long productId);
     ReviewResponseDto registerReview(final ReviewRequestDto reviewRequestDto, final Long productId, final HttpServletRequest request);
     List<ProductResponseDto> rankingList();
***REMOVED***
