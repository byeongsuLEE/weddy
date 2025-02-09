package com.ssafy.product.product.repository;

import com.ssafy.product.product.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
