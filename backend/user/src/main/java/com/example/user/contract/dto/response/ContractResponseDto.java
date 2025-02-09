package com.example.user.contract.dto.response;


import com.example.user.contract.constant.ContractStatus;
import com.example.user.contract.constant.ProductType;
import com.example.user.contract.domain.Product;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Builder
@Getter
public class ContractResponseDto {
    private Long id;
    private String title;
    private String content;
    private ContractStatus status;
    private ProductType type;
    private Long userId;
    private String code;
    private String userName;
    private Long totalMount;
    private Long downPayment;
    private Long finalPayment;
    private String companyName;
    private String additionalTerms;
    private LocalDate startDate;
    private LocalDate endDate;
    private Product product;


}
