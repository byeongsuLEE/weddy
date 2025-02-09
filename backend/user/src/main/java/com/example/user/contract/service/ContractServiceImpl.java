package com.example.user.contract.service;


import com.example.user.common.dto.ErrorCode;
import com.example.user.contract.constant.ContractStatus;
import com.example.user.contract.domain.Contract;
import com.example.user.contract.dto.request.CreateContractRequestDto;
import com.example.user.contract.dto.response.ContractResponseDto;
import com.example.user.contract.repository.ContractRepository;
import com.example.user.common.exception.ContractNotFoundException;
import com.example.user.user.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ContractServiceImpl implements ContractService {

    private final ContractRepository contractRepository;




    @Override
    public List<Contract> createContract(UserEntity user, List<CreateContractRequestDto> createContractRequestListDto) {

        List<Contract> contractList = createContractEntity(user, createContractRequestListDto);
        List<ContractResponseDto> contractResponseDtos = mapToCreateContractResponseDtoList(contractList);
        return  contractRepository.saveAll(contractList);
    }

    @Override
    public Contract changeContractStatus(Long contractId) {
        Contract contract = contractRepository.findById(contractId)
                .orElseThrow(() -> new ContractNotFoundException(ErrorCode.CONTRACT_NOT_FOUND));
        contract.changeStatus();
        return contract;

    }
    @Transactional(readOnly = true)
    @Override
    public Contract getContract(Long contractId) {
        return contractRepository.findById(contractId)
                .orElseThrow(() -> new ContractNotFoundException(ErrorCode.PRODUCT_NOT_FOUND_EXCEPTION));

    }

    @Override
    public List<Contract> getAllContract(UserEntity userEntity) {
        return contractRepository.findByUserCoupleCode(userEntity.getCoupleCode());


    }


    public List<Contract> createContractEntity(UserEntity user, List<CreateContractRequestDto> createContractRequestListDto) {
        //TODO: 계약서 리스트 생성

        List<Contract> contractList = createContractRequestListDto.stream()
                .map((request) -> Contract.builder()
                        .status(ContractStatus.CONTRACT_PENDING)
                        .totalMount(request.getTotalMount())
                        .downPayment(request.getDownPayment())
                        .finalPayment(request.getFinalPayment())
                        .companyName(request.getCompanyName())
                        .additionalTerms(request.getAdditionalTerms())
                        .startDate(request.getStartDate())
                        .endDate(request.getEndDate())
                        .product(request.getProduct())
                        .user(user)
                        .build())
                .collect(Collectors.toList());

        return contractList;
    }
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
