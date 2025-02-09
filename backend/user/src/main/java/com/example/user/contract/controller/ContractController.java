package com.example.user.contract.controller;

import com.example.user.common.dto.ApiResponse;
import com.example.user.contract.domain.Contract;
import com.example.user.contract.dto.request.CreateContractRequestDto;
import com.example.user.contract.dto.response.ContractResponseDto;
import com.example.user.contract.service.ContractService;
import com.example.user.user.entity.UserEntity;
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
public class ContractController {

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
    @PostMapping("/{userId}")
    public ResponseEntity<ApiResponse<List<ContractResponseDto>>> createInitalContract(@AuthenticationPrincipal UserEntity entity, @PathVariable Long userId, @RequestBody List<CreateContractRequestDto> createContractRequestListDto) {
        List<Contract> contractList = contractService.createContract(entity, createContractRequestListDto);
        List<ContractResponseDto> contractResponseDtoList = mapToCreateContractResponseDtoList(contractList);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success(contractResponseDtoList, "계약이 성공적으로 생성되었습니다."));
    }

    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-31
     * @ 설명     : 계약서 상태 변경 api

     * @param contractId
     * @return
     */
    @PatchMapping("/{contractId}")
    public ResponseEntity<ApiResponse<ContractResponseDto>> changeContractStatus(@PathVariable Long contractId) {
        Contract contract = contractService.changeContractStatus(contractId);
        ContractResponseDto contractResponseDto = contract.mapToCreateContractResponseDto(contract);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(contractResponseDto, "계약서 상태가 변경되었습니다."));
    }

    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-31
     * @ 설명     : 계약서 전체조회 api

     * @param userEntity
     * @return
     */
    @GetMapping
    public ResponseEntity<ApiResponse<List<ContractResponseDto>>> getAllContract(@AuthenticationPrincipal UserEntity userEntity) {
        List<Contract> contractList = contractService.getAllContract(userEntity);
        List<ContractResponseDto> contractResponseDtoList = mapToCreateContractResponseDtoList(contractList);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(contractResponseDtoList, "계약서 전체조회 성공"));
    }


    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-31
     * @ 설명     : 계약서 상세조회 api

     * @param contractId
     * @param userEntity
     * @return
     */
    @GetMapping("/{contractId}")
    public ResponseEntity<ApiResponse<ContractResponseDto>> getContract(@PathVariable Long contractId,@AuthenticationPrincipal UserEntity userEntity) {
        Contract contract = contractService.getContract(contractId);
        ContractResponseDto contractResponseDto = contract.mapToCreateContractResponseDto(contract);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(contractResponseDto, "계약서 상세조회 성공"));
    }


    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-31
     * @ 설명     :

     * @param contract
     * @return
     */
    public  List<ContractResponseDto> mapToCreateContractResponseDtoList(List<Contract> contract) {
        //TODO: CreateContractResponseDto 매핑
        return contract.stream()
                .map((contract1) -> ContractResponseDto.builder()
                        .id(contract1.getId())
                        .title(contract1.getProduct().getProductName())
                        .content(contract1.getProduct().getProductContent())
                        .type(contract1.getProduct().getType())
                        .code(contract1.getUser().getCoupleCode())
                        .userName(contract1.getUser().getName())
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
    }


}
