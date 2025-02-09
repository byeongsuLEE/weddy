package com.example.user.contract.dto.request;

import com.example.user.contract.domain.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-30
 * 설명    :
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateContractRequestDto {

    private Long userId;
    private String code;
    private String userName;
    private Long totalMount;
    private Long downPayment;
    private Long FinalPayment;
    private String companyName;
    private String additionalTerms;
    private LocalDate startDate;
    private LocalDate endDate;
    private Product product;

}
