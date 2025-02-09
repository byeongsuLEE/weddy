package com.ssafy.product.product.service;

import com.ssafy.product.product.dto.request.VenderRequestDto;
import com.ssafy.product.product.dto.response.VenderResponseDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.multipart.MultipartFile;

public interface VenderService {
    VenderResponseDto registVender(final VenderRequestDto venderRequestDto, final MultipartFile image, final HttpServletRequest request);
}
