package com.example.user.cart.repository;

import com.example.user.cart.entity.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<CartEntity,Long> ***REMOVED***
    Long findCartIdByUserId(Long userId);

    List<Long> findCartIdsByUserId(Long id);

    @Query("SELECT c.productId FROM CartEntity c WHERE c.userId = :userId")
    List<Long> findAllProductIdByUserId(Long userId);
***REMOVED***
