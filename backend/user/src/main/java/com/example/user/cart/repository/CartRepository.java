package com.example.user.cart.repository;

import com.example.user.cart.entity.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<CartEntity,Long> ***REMOVED***
    List<CartEntity> findByCoupleCode(String coupleCode);

    List<Long> findCartIdsByUserId(Long id);

    @Query("SELECT c.productId FROM CartEntity c WHERE c.coupleCode = :coupleCode")
    List<Long> findAllProductIdByUserId(String coupleCode);
***REMOVED***
