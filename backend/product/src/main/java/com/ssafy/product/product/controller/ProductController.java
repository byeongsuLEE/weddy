package com.ssafy.product.product.controller;

import com.ssafy.product.global.util.response.ApiResponse;
import com.ssafy.product.product.dto.request.ProductRegistRequestDto;
import com.ssafy.product.product.dto.request.ReviewRequestDto;
import com.ssafy.product.product.service.ProductService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import weddy.commonlib.dto.response.ProductResponseDto;
import weddy.commonlib.dto.response.ReviewResponseDto;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
@Slf4j
public class ProductController ***REMOVED***
    private final ProductService productService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<ProductResponseDto>>> getAllProducts() ***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(ApiResponse.success(productService.getList(),"상품 전체 조회"));
    ***REMOVED***
    @GetMapping("/***REMOVED***product_id***REMOVED***")
    public ResponseEntity<ApiResponse<ProductResponseDto>> getProductById(@PathVariable("product_id") Long productId) ***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(ApiResponse.success(productService.detailProduct(productId),"상품 상세 조회"));
    ***REMOVED***

    @PostMapping
    public ResponseEntity<ApiResponse<ProductResponseDto>> registProduct(@RequestPart("product") ProductRegistRequestDto registRequestDto, @RequestPart(value = "image", required = false) List<MultipartFile> images, HttpServletRequest request)***REMOVED***
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(HttpStatus.CREATED,productService.registProduct(registRequestDto, images, request),"상품 등록"));
    ***REMOVED***

    @GetMapping("/***REMOVED***product_id***REMOVED***/review")
    public ResponseEntity<ApiResponse<List<ReviewResponseDto>>> getReviewByProductId(@PathVariable("product_id") Long productId) ***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(ApiResponse.success(productService.reviewList(productId),"상품 리뷰 조회"));
    ***REMOVED***

    @PostMapping("/***REMOVED***product_id***REMOVED***/review")
    public ResponseEntity<ApiResponse<ReviewResponseDto>> registReviewByProductId(@RequestBody ReviewRequestDto reviewRequestDto,
                                                                                  @PathVariable("product_id") Long productId,
                                                                                  HttpServletRequest request) ***REMOVED***
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(HttpStatus.CREATED,productService.registerReview(reviewRequestDto,productId,request),"리뷰 등록"));

    ***REMOVED***

    @GetMapping("/ranking")
    public ResponseEntity<ApiResponse<List<ProductResponseDto>>> getRankingProducts() ***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(ApiResponse.success(productService.rankingList(),"랭킹 조회 (최대 8개)"));
    ***REMOVED***

***REMOVED***
