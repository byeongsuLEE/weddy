package com.example.user.payment.controller;


import com.example.user.common.dto.ApiResponse;
import com.example.user.contract.service.ContractService;
import com.example.user.payment.dto.request.ContractInfoRequestDto;
import com.example.user.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/success")
    public ResponseEntity<ApiResponse<String>> success(@RequestBody ContractInfoRequestDto contractInfoRequestDto) {
        paymentService.paymentSuccess(contractInfoRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success( null,"결제 성공 후 이벤트 발송 성공 "));
    }

}
