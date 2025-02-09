package com.ssafy.schedule.domain.event;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate endDate;
    private Product product;
    private String paymentId;
    private UserCoupleTokenDto userCoupleToken;

    public void addFcmTokenInfo(UserCoupleTokenDto userCoupleToken) {
        this.userCoupleToken = userCoupleToken;
    }

}
