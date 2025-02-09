package com.example.user.contract.domain;

import com.example.user.common.dto.ErrorCode;
import com.example.user.contract.dto.response.ContractResponseDto;
import com.example.user.contract.constant.ContractStatus;
import com.example.user.common.exception.PaymentNotValidateException;
import com.example.user.user.entity.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ContractStatus status;

    private Long totalMount;
    private Long downPayment;
    private Long finalPayment;

    @Column(length = 30)
    private String companyName;
    private String additionalTerms;
    private LocalDate startDate;
    private LocalDate endDate;

    //product 외부 상품서비스 정보 등록

    @Embedded
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;



    public ContractResponseDto mapToCreateContractResponseDto(Contract contract) {
        //TODO: CreateContractResponseDto 매핑
        return ContractResponseDto.builder()
                        .id(contract.getId())
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
                        .build();
    }


    public boolean validation(Long totalMount){
        return this.totalMount.equals(totalMount);
    }





    public void changeStatus() {
        //이 함수가 호출되면 계약서 상태가 변경이된다.

            switch (this.status) {
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
            }

    }
}

