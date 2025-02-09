package com.example.user.contract.repository;

import com.example.user.contract.domain.Contract;
import com.example.user.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ContractRepository extends JpaRepository<Contract, Long> {
    Optional<Contract> findByIdAndUser(Long contractId, UserEntity userEntity);

    List<Contract> findByUserCoupleCode(String coupleCode);
    // 계약서 생성 , 계약서 상태 변경 , 나의 계약서 전체 조회, 나의 계약서 타입별 조회




}
