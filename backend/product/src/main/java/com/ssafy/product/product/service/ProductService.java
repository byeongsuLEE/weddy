package com.ssafy.product.product.service;

import com.ssafy.product.product.dto.request.ProductRegistRequestDto;
import com.ssafy.product.product.dto.response.ProductResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProductService ***REMOVED***
     List<ProductResponseDto> getList();
     ProductResponseDto detailProduct(final Long id);
     ProductResponseDto registProduct(final ProductRegistRequestDto productRegistRequestDto);
***REMOVED***
