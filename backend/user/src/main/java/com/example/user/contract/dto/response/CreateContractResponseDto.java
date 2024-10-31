package com.example.user.contract.dto.response;


import com.example.user.contract.constant.ContractStatus;
import com.example.user.contract.constant.ProductType;
import com.example.user.contract.domain.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Builder
@Getter
public class  CreateContractResponseDto ***REMOVED***
    private Long id;
    private String title;
    private String content;
    private ContractStatus status;
    private ProductType type;
    private Long userId;
    private Long productId;
    private Long totalMount;
    private Long downPayment;
    private Long FinalPayment;
    private String companyName;
    private String additionalTerms;
    private LocalDate startDate;
    private LocalDate endDate;
    private Product

***REMOVED***
