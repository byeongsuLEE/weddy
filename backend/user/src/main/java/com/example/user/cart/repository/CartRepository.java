package com.example.user.cart.repository;

import com.example.user.cart.entity.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CartRepository extends JpaRepository<CartEntity,Long> {

    List<CartEntity> findByCoupleCode(String coupleCode);

    boolean existsByCoupleCodeAndProductId(String coupleCode, Long productId);

    @Query("SELECT c.productId FROM CartEntity c WHERE c.coupleCode = :coupleCode")
    List<Long> findAllProductIdByUserId(String coupleCode);

    @Transactional
    @Modifying
    @Query("DELETE FROM CartEntity e WHERE e.productId = :productId AND e.coupleCode = :coupleCode")
    int deleteByUserIdAndProductId(Long productId, String coupleCode);
}
