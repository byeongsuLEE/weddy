package com.ssafy.product.product.repository;

import com.ssafy.product.product.domain.Vender;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VenderRepository extends JpaRepository<Vender, Integer> ***REMOVED***
    Vender findByUserId(Long userId);

***REMOVED***
