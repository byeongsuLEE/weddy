package com.example.contract.controller;

import com.example.contract.dto.request.CreateContractRequestDto;
import com.example.contract.service.ContractService;
import com.example.contract.domain.Contract;
import com.example.contract.dto.response.ContractResponseDto;
import com.example.global.util.response.ApiResponse;
import com.example.user.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-30
 * 설명    :
 */

@RestController
@RequestMapping("/contracts")
@RequiredArgsConstructor
public class ContractController ***REMOVED***

    private final ContractService contractService;


    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-31
     * @ 설명     : 선택된 상품들 계약서 만들기 api

     * @param entity
     * @param userId
     * @param createContractRequestListDto
     * @return
     */
    @PostMapping("/***REMOVED***userId***REMOVED***")
    public ResponseEntity<ApiResponse<List<ContractResponseDto>>> createInitalContract(@AuthenticationPrincipal UserEntity entity, @PathVariable Long userId, @RequestBody List<CreateContractRequestDto> createContractRequestListDto) ***REMOVED***
        List<Contract> contractList = contractService.createContract(entity, createContractRequestListDto);
        List<ContractResponseDto> contractResponseDtoList = mapToCreateContractResponseDtoList(contractList);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success(contractResponseDtoList, "계약이 성공적으로 생성되었습니다."));
    ***REMOVED***

    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-31
     * @ 설명     : 계약서 상태 변경 api

     * @param contractId
     * @return
     */
    @PatchMapping("/***REMOVED***contractId***REMOVED***")
    public ResponseEntity<ApiResponse<ContractResponseDto>> changeContractStatus(@PathVariable Long contractId) ***REMOVED***
        Contract contract = contractService.changeContractStatus(contractId);
        ContractResponseDto contractResponseDto = contract.mapToCreateContractResponseDto(contract);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(contractResponseDto, "계약서 상태가 변경되었습니다."));
    ***REMOVED***


    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-31
     * @ 설명     : 계약서 상세조회 api

     * @param contractId
     * @param userEntity
     * @return
     */
    @GetMapping("/***REMOVED***contractId***REMOVED***")
    public ResponseEntity<ApiResponse<ContractResponseDto>> getContract(@PathVariable Long contractId,@AuthenticationPrincipal UserEntity userEntity) ***REMOVED***
        Contract contract = contractService.getContract(contractId);
        ContractResponseDto contractResponseDto = contract.mapToCreateContractResponseDto(contract);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(contractResponseDto, "계약서 상세조회 성공"));
    ***REMOVED***

    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-31
     * @ 설명     : 계약서 전체조회 api

     * @param userEntity
     * @return
     */
    @GetMapping
    public ResponseEntity<ApiResponse<List<ContractResponseDto>>> getAllContract(@AuthenticationPrincipal UserEntity userEntity) ***REMOVED***
        List<Contract> contractList = contractService.getAllContract(userEntity);
        List<ContractResponseDto> contractResponseDtoList = mapToCreateContractResponseDtoList(contractList);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(contractResponseDtoList, "계약서 전체조회 성공"));
    ***REMOVED***


    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-31
     * @ 설명     :

     * @param contract
     * @return
     */
    public  List<ContractResponseDto> mapToCreateContractResponseDtoList(List<Contract> contract) ***REMOVED***
        //TODO: CreateContractResponseDto 매핑
        return contract.stream()
                .map((contract1) -> com.example.contract.dto.response.ContractResponseDto.builder()
                        .id(contract1.getId())
                        .type(contract1.getType())
                        .status(contract1.getStatus())
                        .totalMount(contract1.getTotalMount())
                        .downPayment(contract1.getDownPayment())
                        .finalPayment(contract1.getFinalPayment())
                        .companyName(contract1.getCompanyName())
                        .additionalTerms(contract1.getAdditionalTerms())
                        .startDate(contract1.getStartDate())
                        .endDate(contract1.getEndDate())
                        .product(contract1.getProduct())
                        .userId(contract1.getUser().getId())
                        .build())
                .collect(Collectors.toList());
    ***REMOVED***


***REMOVED***
