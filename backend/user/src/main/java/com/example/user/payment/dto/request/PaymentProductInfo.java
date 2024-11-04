package com.example.user.payment.dto.request;

import com.example.user.contract.constant.ContractStatus;
import com.example.user.contract.domain.Product;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
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
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;
    private Product product;

***REMOVED***
