package com.ssafy.product.product.controller;

import com.ssafy.product.product.dto.request.ProductRegistRequestDto;
import com.ssafy.product.product.dto.request.ReviewRequestDto;
import com.ssafy.product.product.dto.response.ProductResponseDto;
import com.ssafy.product.product.dto.response.ReviewResponseDto;
import com.ssafy.product.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductController ***REMOVED***
    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductResponseDto>> getAllProducts() ***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(productService.getList());
    ***REMOVED***
    @GetMapping("/***REMOVED***product_id***REMOVED***")
    public ResponseEntity<ProductResponseDto> getProductById(@PathVariable("product_id") Long productId) ***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(productService.detailProduct(productId));
    ***REMOVED***

    @PostMapping
    public ResponseEntity<ProductResponseDto> registProduct(@RequestPart ProductRegistRequestDto registRequestDto, @RequestPart List<MultipartFile> images)***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(productService.registProduct(registRequestDto, images));
    ***REMOVED***

    @GetMapping("/***REMOVED***product_id***REMOVED***/review")
    public ResponseEntity<List<ReviewResponseDto>> getReviewByProductId(@PathVariable("product_id") Long productId) ***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(productService.reviewList(productId));

    ***REMOVED***

    @PostMapping("/***REMOVED***product_id***REMOVED***/review")
    public ResponseEntity<ReviewResponseDto> registReviewByProductId(@RequestBody ReviewRequestDto reviewRequestDto, @PathVariable("product_id") Long productId) ***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(productService.registerReview(reviewRequestDto,productId));

    ***REMOVED***

    @GetMapping("/ranking")
    public ResponseEntity<List<ProductResponseDto>> getRankingProducts() ***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(productService.rankingList());
    ***REMOVED***

***REMOVED***
