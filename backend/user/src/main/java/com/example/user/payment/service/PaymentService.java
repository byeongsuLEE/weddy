package com.example.user.payment.service;


import com.example.user.contract.dto.response.ContractResponseDto;
import com.example.user.contract.service.ContractService;
import com.example.user.payment.dto.request.ContractInfoRequestDto;
import com.example.user.payment.dto.request.PaymentProductInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class PaymentService ***REMOVED***


    @Value(value = "$***REMOVED***producers.topic1.name***REMOVED***")
    private String TOPIC_PAYMENT;

    private final KafkaTemplate<String ,PaymentProductInfo> kafkaTemplate;
    private final ContractService contractService;
    /**
     * 결제 성공 후 게약서 상태 정보 변경 및 카프카를 통해 일정 자동 등록 이벤트 발생
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-11-04
     * @ 설명     :결제 성공 후 게약서 상태 정보 변경 및 카프카를 통해 일정 자동 등록 이벤트 발생
     * @param contractInfoRequestDto
     */
    public void paymentSuccess(ContractInfoRequestDto contractInfoRequestDto) ***REMOVED***
        contractService.changeContractStatus(contractInfoRequestDto.getId());
        occurPaymentEvent(contractInfoRequestDto);
    ***REMOVED***



    /**
     * 일정 등록 이벤트 발생
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-11-05
     * @ 설명     :

     * @param contractInfoRequestDto
     */
    public void occurPaymentEvent(ContractInfoRequestDto contractInfoRequestDto)  ***REMOVED***
        PaymentProductInfo paymentProductInfo = createPaymentProductInfo(contractInfoRequestDto);

        CompletableFuture<SendResult<String, PaymentProductInfo>> send = kafkaTemplate.send(TOPIC_PAYMENT, paymentProductInfo);
        send.whenComplete((sendResult,ex)->***REMOVED***
            if(ex!=null)***REMOVED***

                log.info("결제 실패 하였습니다. 보상함수를 실행합니다."+ ex.getMessage());

                // 보상함수 실행 ;
                // 결제 보상;
            ***REMOVED***else***REMOVED***
                PaymentProductInfo value = (PaymentProductInfo) sendResult.getProducerRecord().value();
                log.info("이벤트 처리완료");


            ***REMOVED***
        ***REMOVED***);
    ***REMOVED***

    private PaymentProductInfo createPaymentProductInfo(ContractInfoRequestDto contractInfoRequestDto) ***REMOVED***
        return PaymentProductInfo.builder()
                .id(contractInfoRequestDto.getId())
                .title(contractInfoRequestDto.getTitle())
                .content(contractInfoRequestDto.getContent())
                .status(contractInfoRequestDto.getStatus())
                .userId(contractInfoRequestDto.getUserId())
                .code(contractInfoRequestDto.getCode())
                .userName(contractInfoRequestDto.getUserName())
                .totalMount(contractInfoRequestDto.getTotalMount())
                .companyName(contractInfoRequestDto.getCompanyName())
                .additionalTerms(contractInfoRequestDto.getAdditionalTerms())
                .startDate(contractInfoRequestDto.getStartDate())
                .endDate(contractInfoRequestDto.getEndDate())
                .product(contractInfoRequestDto.getProduct())
                .build();
    ***REMOVED***

***REMOVED***
