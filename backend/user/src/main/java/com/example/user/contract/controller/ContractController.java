package com.example.user.contract.controller;

import com.example.user.contract.domain.Contract;
import com.example.user.contract.dto.request.CreateContractRequestDto;
import com.example.user.contract.dto.response.CreateContractResponseDto;
import com.example.user.contract.service.ContractService;
import com.example.user.global.util.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/***REMOVED***userId***REMOVED***")
    public ResponseEntity<ApiResponse<CreateContractResponseDto>> createContract(@PathVariable Long userId, @RequestBody CreateContractRequestDto createContractRequestDto) ***REMOVED***
            Contract  contract = contractService.createContract(userId, createContractRequestDto);
            contract.mapToCreateContractResponseDto(contract);
    ***REMOVED***



***REMOVED***
