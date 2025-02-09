package com.example.user.contract.service;

import com.example.user.contract.domain.Contract;
import com.example.user.contract.dto.request.CreateContractRequestDto;
import com.example.user.user.entity.UserEntity;

import java.util.List;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-30
 * 설명    : 계약서 작성 ,내 계약서 전체 조회 , 내 계약서 타입에 따른 조회
 */
public interface ContractService {


    List<Contract> createContract(UserEntity user, List<CreateContractRequestDto> createContractRequestListDto);

    Contract changeContractStatus(Long contractId);

    Contract getContract(Long contractId);

    List<Contract> getAllContract(UserEntity userEntity);
}
