package com.example.user.payment.controller;


import com.example.user.contract.global.util.response.ApiResponse;
import com.example.user.contract.service.ContractService;
import com.example.user.payment.dto.request.ContractInfoRequestDto;
import com.example.user.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/payments")
public class PaymentController ***REMOVED***

    private final PaymentService paymentService;

    @GetMapping("/success")
    public ResponseEntity<ApiResponse<String>> success(@RequestBody ContractInfoRequestDto contractInfoRequestDto) ***REMOVED***
        paymentService.paymentSuccess(contractInfoRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success( null,"결제 성공 후 이벤트 발송 성공 "));
    ***REMOVED***

***REMOVED***
