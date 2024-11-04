package com.example.user.payment.controller;


import com.example.user.contract.service.ContractService;
import com.example.user.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/payments")
public class PaymentController ***REMOVED***

    private final PaymentService paymentService;
    private final ContractService contractService;
    private final KafkaTemplate<String, String> kafkaTemplate;

***REMOVED***
