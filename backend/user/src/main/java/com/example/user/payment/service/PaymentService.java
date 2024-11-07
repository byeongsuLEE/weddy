package com.example.user.payment.service;


import com.example.user.common.dto.ErrorCode;
import com.example.user.common.exception.PaymentNotValidateException;
import com.example.user.contract.domain.Contract;
import com.example.user.contract.repository.ContractRepository;
import com.example.user.contract.service.ContractService;
import com.example.user.payment.dto.request.ContractInfoRequestDto;
import com.example.user.payment.dto.request.PaymentProductInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.util.concurrent.CompletableFuture;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class PaymentService ***REMOVED***

    @Value(value = "$***REMOVED***portone.api-key***REMOVED***")
    private String API_SECRET_KEY;
    @Value(value = "$***REMOVED***portone.store-id***REMOVED***")
    private String STORE_ID;
    @Value(value = "$***REMOVED***producers.topic1.name***REMOVED***")
    private String TOPIC_PAYMENT;

    private final KafkaTemplate<String ,PaymentProductInfo> kafkaTemplate;
    private final ContractService contractService;
    private final ContractRepository contractRepository;
    /**
     * 결제 성공 후 게약서 상태 정보 변경 및 카프카를 통해 일정 자동 등록 이벤트 발생
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-11-04
     * @ 설명     :결제 성공 후 게약서 상태 정보 변경 및 카프카를 통해 일정 자동 등록 이벤트 발생
     * @param contractInfoRequestDto
     */
    public void paymentSuccess(ContractInfoRequestDto contractInfoRequestDto) ***REMOVED***

        boolean isValidatedPayment = validatePayment(contractInfoRequestDto);
        if(!isValidatedPayment) ***REMOVED***
            //결제 취소 로직 작성
            String reason = " 결제 인증 실패";
            paymentCancel(contractInfoRequestDto.getPaymentId(), reason);
            return ;
        ***REMOVED***

        log.info("결제성공" + contractInfoRequestDto.toString());
        contractService.changeContractStatus(contractInfoRequestDto.getId());
        occurPaymentEvent(contractInfoRequestDto);
    ***REMOVED***

    /**
     * 결제 인증
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-11-06
     * @ 설명     : 계약서 금액과 결제 금액 및 결제 번호 일치 여부 파악
     * @param contractInfoRequestDto
     * @return

     */
    private boolean validatePayment(ContractInfoRequestDto contractInfoRequestDto) ***REMOVED***
        Long contractId = contractInfoRequestDto.getId();
        String paymentId = contractInfoRequestDto.getPaymentId();
        Long paidAmount = contractInfoRequestDto.getTotalMount();

        //결제내역 조회
        isPaymentIdValid(paymentId);

        // 계약서가 잘못되면 에러
        Contract contract= contractRepository.findById(contractId).orElse(null);
        if(contract==null) return false;

        //가격 일치 여부 판단.
        Boolean isPaidAmountValidated =contract.validation(paidAmount);
        if(!isPaidAmountValidated) return false;

        return true;
    ***REMOVED***


    public void isPaymentIdValid(String paymentId)***REMOVED***

        String url  = "https://api.portone.io/payments/" + paymentId;
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("Authorization", "PortOne " +API_SECRET_KEY);
        HttpEntity<String > entity = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(url,HttpMethod.GET,entity,String.class
        );

        if(response.getStatusCode().is2xxSuccessful())***REMOVED***
            log.info("결제내역 조회 성공");
        ***REMOVED***else***REMOVED***
            log.info("결제내역 조회 실패");
            throw new PaymentNotValidateException(ErrorCode.PAYMENT_NOT_VALIDATE);
        ***REMOVED***



    ***REMOVED***

    public void paymentCancel(String paymentId, String reason) ***REMOVED***
        // 결제 취소 로직

        RestTemplate restTemplate = new RestTemplate();
        String url =  "https://api.portone.io/payments/"+paymentId+"/cancel";
        HttpHeaders headers  = new HttpHeaders();
        headers.add("Authorization","PortOne "+API_SECRET_KEY);
        headers.setContentType(MediaType.APPLICATION_JSON);  // Content-Type 추가
        String requestBody = "***REMOVED***\"reason\":\""  + reason +"\"***REMOVED***";
        HttpEntity<String > entity = new HttpEntity<>(requestBody,headers);

        ResponseEntity<String> response  =  restTemplate.exchange(
                url,
                HttpMethod.POST,
                entity,
                String.class
        );

        if(response.getStatusCode().is2xxSuccessful())***REMOVED***
            log.info("결제 취소 성공");
        ***REMOVED***else***REMOVED***
            log.info("결제 취소 실패");
        ***REMOVED***
    ***REMOVED***



    /**
     * 일정 등록 이벤트 발생
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-11-05
     * @ 설명     :

     * @param contractInfoRequestDto
     */
    public void occurPaymentEvent(ContractInfoRequestDto contractInfoRequestDto)  ***REMOVED***
        PaymentProductInfo paymentProductInfo = mapToPaymentProductInfo(contractInfoRequestDto);
        CompletableFuture<SendResult<String, PaymentProductInfo>> send = kafkaTemplate.send(TOPIC_PAYMENT, paymentProductInfo);
        // 이 함수는 이벤트가 전달 됐는지를 확인하는거다.
        send.whenComplete((sendResult,ex)->***REMOVED***
            if(ex!=null)***REMOVED***
                log.info("결제 이벤트 전달 실패."+ ex.getMessage());

            ***REMOVED***else***REMOVED***
                PaymentProductInfo value = (PaymentProductInfo) sendResult.getProducerRecord().value();
                log.info("결제 이벤트 전달 완료");


            ***REMOVED***
        ***REMOVED***);
    ***REMOVED***

    private PaymentProductInfo mapToPaymentProductInfo(ContractInfoRequestDto contractInfoRequestDto) ***REMOVED***
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
                .paymentId(contractInfoRequestDto.getPaymentId())
                .build();
    ***REMOVED***

***REMOVED***
