package com.example.user.contract.controller;

import com.example.user.contract.domain.Contract;
import com.example.user.contract.dto.request.CreateContractRequestDto;
import com.example.user.contract.service.ContractService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-30
 * 설명    :
 */

@RestController
@RequestMapping("/contracts")
@RequiredArgsConstructor
public class ContractController ***REMOVED***

    private final ContractService contractService ;

    @PostMapping
    public ResponseEntity<Contract> save(@RequestBody CreateContractRequestDto createContractRequestDto) ***REMOVED***


    ***REMOVED***



***REMOVED***
