package com.example.user.contract.domain;

import com.example.user.contract.constant.ContractStatus;
import com.example.user.contract.constant.ProductType;
import com.example.user.entity.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;

import java.time.LocalDate;
import java.util.Set;

/**
 * 작성자   : 이병수
 * 작성날짜 : 2024-10-30
 * 설명    : 계약서 엔티티 클래스
 */

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Contract ***REMOVED***

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private ProductType type;
    private ContractStatus status;
    private Long totalMount;
    private Long prePayment;
    private Long finalPayment;

    @Column(length = 30)
    private String companyName;
    private String additionalTerms;
    private LocalDate startDate;
    private LocalDate endDate;
    @Column(nullable = false, length = 10)
    private String code;

    //product 외부 상품서비스 정보 등록

    @Embedded
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;


***REMOVED***

