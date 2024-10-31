package com.example.contract.repository;

import com.example.contract.domain.Contract;
import com.example.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ContractRepository extends JpaRepository<Contract, Long> ***REMOVED***
    Optional<Contract> findByIdAndUser(Long contractId, UserEntity userEntity);

    List<Contract> findByCode(String code);
    // 계약서 생성 , 계약서 상태 변경 , 나의 계약서 전체 조회, 나의 계약서 타입별 조회




***REMOVED***
