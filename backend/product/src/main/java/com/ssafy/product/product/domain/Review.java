package com.ssafy.product.product.domain;

import com.ssafy.product.product.dto.request.ReviewRequestDto;
import weddy.commonlib.dto.response.ReviewResponseDto;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class) // Auditing 기능 활성화
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String content;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @CreatedDate
    private LocalDate date;

    private Double score;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

    public ReviewResponseDto getReview(Review review, Product product) {
        return ReviewResponseDto.builder()
                .id(review.id)
                .userId(review.userId)
                .productId(product.getId())
                .content(review.content)
                .date(review.date)
                .score(review.score)
                .build();
    }

    @Builder
    public Review(ReviewRequestDto reviewRequestDto, Product product, Long userId) {
        this.userId = userId;
        this.content = reviewRequestDto.content();
        this.score = reviewRequestDto.score();
        this.product = product;
    }
}
