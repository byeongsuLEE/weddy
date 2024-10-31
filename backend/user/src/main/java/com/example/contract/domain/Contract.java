package com.example.contract.domain;

import com.example.contract.constant.ContractStatus;
import com.example.contract.constant.ProductType;
import com.example.contract.dto.request.CreateContractRequestDto;
import com.example.contract.dto.response.ContractResponseDto;
import com.example.user.entity.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

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
    private Long downPayment;
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



    public ContractResponseDto mapToCreateContractResponseDto(Contract contract) ***REMOVED***
        //TODO: CreateContractResponseDto 매핑
        return ContractResponseDto.builder()
                        .id(contract.getId())
                        .type(contract.getType())
                        .status(contract.getStatus())
                        .totalMount(contract.getTotalMount())
                        .downPayment(contract.getDownPayment())
                        .finalPayment(contract.getFinalPayment())
                        .companyName(contract.getCompanyName())
                        .additionalTerms(contract.getAdditionalTerms())
                        .startDate(contract.getStartDate())
                        .endDate(contract.getEndDate())
                        .product(contract.getProduct())
                        .userId(contract.getUser().getId())
                        .userName(contract.getUser().getName())
                         .code(contract.getCode())
                        .build();
    ***REMOVED***





    public void changeStatus() ***REMOVED***
        //이 함수가 호출되면 계약서 상태가 변경이된다.

            switch (this.status) ***REMOVED***
                case CONTRACT_PENDING:
                    this.status = ContractStatus.SIGN_PENDING;
                    break;
                case SIGN_PENDING:
                    this.status = ContractStatus.PAYMENT_PENDING;
                    break;
                case PAYMENT_PENDING:
                    this.status = ContractStatus.PAYMENT_COMPLETED;
                    break;
                default:
                    break;
            ***REMOVED***

    ***REMOVED***
***REMOVED***

