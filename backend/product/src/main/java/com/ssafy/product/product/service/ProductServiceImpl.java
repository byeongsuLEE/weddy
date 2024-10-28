package com.ssafy.product.product.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.product.config.s3.S3Uploader;
import com.ssafy.product.product.domain.Product;
import com.ssafy.product.product.domain.ProductImage;
import com.ssafy.product.product.domain.Review;
import com.ssafy.product.product.dto.request.ProductRegistRequestDto;
import com.ssafy.product.product.dto.request.ReviewRequestDto;
import com.ssafy.product.product.dto.response.ProductResponseDto;
import com.ssafy.product.product.dto.response.ReviewResponseDto;
import com.ssafy.product.product.repository.ProductImageRepository;
import com.ssafy.product.product.repository.ProductRepository;
import com.ssafy.product.product.repository.ReviewRepository;
import com.ssafy.product.util.RedisUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ProductServiceImpl implements ProductService***REMOVED***
    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final S3Uploader s3Uploader;
    private final ReviewRepository reviewRepository;
    private final RedisUtil redisUtil;

    @Override
    public List<ProductResponseDto> getList() ***REMOVED***
        return productRepository.findAll().stream()
                .map(product -> product.getProduct(product))
                .toList();
    ***REMOVED***

    @Override
    public ProductResponseDto detailProduct(final Long productId) ***REMOVED***
        Product product = productIsPresent(productId);

        ProductResponseDto productResponse = product.getProduct(product);
        redisUtil.addToSortedSet(productResponse);

        return productResponse;
    ***REMOVED***

    @Override
    @Transactional
    public ProductResponseDto registProduct(final ProductRegistRequestDto productRegistRequestDto,
                                            final List<MultipartFile> images) ***REMOVED***
        Product product = productRepository.save(Product.builder().productRegistRequestDto(productRegistRequestDto).build());
        List<ProductImage> productImages = productImageRepository.saveAll(images.stream()
                        .map(image -> ProductImage.builder()
                                .imageUrl(s3Uploader.putS3(image))
                                .product(product)
                                .build())
                        .toList());
        return ProductResponseDto.registProductResponseDto(product,productImages);
    ***REMOVED***

    @Override
    public List<ReviewResponseDto> reviewList(final Long productId) ***REMOVED***
        Product product = productIsPresent(productId);
        List<Review> reviews = reviewRepository.findByProductId(productId);

        return reviews.stream()
                .map(review -> review.getReview(review,product))
                .toList();
    ***REMOVED***

    @Override
    @Transactional
    public ReviewResponseDto registerReview(final ReviewRequestDto reviewRequestDto, final Long productId) ***REMOVED***
        Product product = productIsPresent(productId);
        Review review = reviewRepository.save(Review.builder().reviewRequestDto(reviewRequestDto).product(product).build());

        return review.getReview(review,product);
    ***REMOVED***

    @Override
    public List<ProductResponseDto> rankingList() ***REMOVED***
        ObjectMapper objectMapper = new ObjectMapper();

        return redisUtil.getTopRanked().stream()
                .map(obj -> objectMapper.convertValue(obj, ProductResponseDto.class))
                .toList();
    ***REMOVED***

    private Product productIsPresent(final Long productId) ***REMOVED***
        return productRepository.findById(productId).orElseThrow(
                // TODO : CustomException 구현 후 변경 예정
                () -> new RuntimeException("해당 상품을 찾을 수 없습니다.")
        );
    ***REMOVED***
***REMOVED***
