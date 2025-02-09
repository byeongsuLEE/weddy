package com.ssafy.product.product.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.product.global.s3.S3Uploader;
import com.ssafy.product.global.util.JwtUtil;
import com.ssafy.product.global.util.ProducerUtil;
import com.ssafy.product.global.util.RedisUtil;
import com.ssafy.product.global.util.exception.ImageInvalidException;
import com.ssafy.product.global.util.exception.ProductNotFoundExpception;
import com.ssafy.product.global.util.response.ErrorCode;
import com.ssafy.product.product.domain.Product;
import com.ssafy.product.product.domain.ProductImage;
import com.ssafy.product.product.domain.Review;
import com.ssafy.product.product.domain.Vender;
import com.ssafy.product.product.dto.request.ProductRegistRequestDto;
import com.ssafy.product.product.dto.request.ReviewRequestDto;
import com.ssafy.product.product.repository.ProductImageRepository;
import com.ssafy.product.product.repository.ProductRepository;
import com.ssafy.product.product.repository.ReviewRepository;
import com.ssafy.product.product.repository.VenderRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import weddy.commonlib.dto.response.ProductResponseDto;
import weddy.commonlib.dto.response.ReviewResponseDto;
import weddy.commonlib.constant.KeyType;
import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
@Slf4j
public class ProductServiceImpl implements ProductService{
    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final VenderRepository venderRepository;
    private final S3Uploader s3Uploader;
    private final ReviewRepository reviewRepository;
    private final RedisUtil redisUtil;
    private final SyncService syncService;
    private final ObjectMapper mapper;
    private final JwtUtil jwtUtil;
    private final ProducerUtil<String,List<ProductResponseDto>> producerUtil;

    @Override
    public List<ProductResponseDto> getList() {
//        log.info("value : {}", redisUtil.getAllHashValuesList(KeyType.PRODUCT.name()));
        return mapper.convertValue(redisUtil.getAllHashValues(KeyType.PRODUCT.name()).values(), new TypeReference<List<ProductResponseDto>>(){});
    }

    @Override
    public ProductResponseDto detailProduct(final Long productId) {
        Product product = productIsPresent(productId);
        ProductResponseDto productResponse = product.getProduct(product);
        redisUtil.addToSortedSet(productResponse);

        return mapper.convertValue(redisUtil.getHashValue(KeyType.PRODUCT,productResponse.getId()), ProductResponseDto.class);
    }

    @Override
    @Transactional
    public ProductResponseDto registProduct(final ProductRegistRequestDto productRegistRequestDto,
                                            final List<MultipartFile> images,
                                            final HttpServletRequest request) {
        productImageValidation(images);
        Vender vender = venderRepository.findByUserId(jwtUtil.getUserId(jwtUtil.resolveToken(request)));
        Product product = productRepository.save(Product.builder().productRegistRequestDto(productRegistRequestDto).vender(vender).build());
        List<ProductImage> productImages = productImageRepository.saveAll(images.stream()
                .map(image -> ProductImage.builder()
                        .imageUrl(s3Uploader.putS3(image))
                        .product(product)
                        .build())
                .toList());

        ProductResponseDto productResponse = product.registProductResponseDto(product,productImages);
        syncService.syncToReadDatabaseAsync(KeyType.PRODUCT,productResponse.getId(),productResponse);
        return productResponse;
    }

    @Override
    public List<ReviewResponseDto> reviewList(final Long productId) {
        return mapper.convertValue(redisUtil.getAllHashValues(KeyType.REVIEW.name() + ":" + productId).values(), new TypeReference<List<ReviewResponseDto>>() {});

    }

    @Override
    @Transactional
    public ReviewResponseDto registerReview(final ReviewRequestDto reviewRequestDto, final Long productId, final HttpServletRequest request) {
        Product product = productIsPresent(productId);
        Long userId = jwtUtil.getUserId(jwtUtil.resolveToken(request));
        Review review = reviewRepository.save(Review.builder().reviewRequestDto(reviewRequestDto).product(product).userId(userId).build());
        ReviewResponseDto reviewResponse = review.getReview(review,product);
        syncService.syncToReadDatabaseAsync(KeyType.REVIEW, productId,reviewResponse);
        return review.getReview(review,product);
    }

    @Override
    public List<ProductResponseDto> rankingList() {
        ObjectMapper objectMapper = new ObjectMapper();

        return redisUtil.getTopRanked().stream()
                .map(obj -> objectMapper.convertValue(obj, ProductResponseDto.class))
                .toList();
    }

    private Product productIsPresent(final Long productId) {
        return productRepository.findById(productId).orElseThrow(
                () -> new ProductNotFoundExpception(ErrorCode.PRODUCT_NOT_FOUND_EXCEPTION)
        );
    }

    private void productImageValidation(final List<MultipartFile> images) {
        if(images == null || images.isEmpty()){
            throw new ImageInvalidException(ErrorCode.IMAGE_INVALID_EXCEPTION);
        }
    }

    @KafkaListener(topics = "${producers.cart-request-topic.name}", groupId = "${spring.kafka.consumer.group-id}")
    public void listenFindProduct(List<?> response, @Header(KafkaHeaders.RECEIVED_KEY) String key) {
        List<ProductResponseDto> cartList = response.stream()
                .map(id -> {
                    Long parseLong = Long.parseLong(String.valueOf(id).replaceAll("[\\[\\]]", ""));
                    Product product = productIsPresent(parseLong);
                    return product.getProduct(product);
                })
                .toList();
        producerUtil.sendCartListTopic(key,cartList);
    }
}
