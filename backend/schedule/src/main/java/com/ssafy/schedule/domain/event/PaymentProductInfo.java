package com.ssafy.schedule.domain.event;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDate;
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentProductInfo ***REMOVED***
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
    private String startDate;
    private String endDate;
    private Product product;

***REMOVED***
