package com.example.user.payment.dto.request;

import com.example.user.contract.constant.ContractStatus;
import com.example.user.contract.domain.Product;
import com.example.user.user.dto.response.UserCoupleTokenDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * 작성자   : 이병수
 * 작성날짜 : 2024-11-04
 * 설명    :
 */

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentProductInfo {
    private Long id;
    private String title;
    private String content;
    private ContractStatus status;
    private Long userId;
    private String code;
    private String userName;
    private Long totalMount;
    private String companyName;
    private String additionalTerms;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;
    private Product product;
    private String paymentId;
    private UserCoupleTokenDto userCoupleToken;

    public void addFcmTokenInfo(UserCoupleTokenDto userCoupleToken) {
        this.userCoupleToken = userCoupleToken;
    }

}
