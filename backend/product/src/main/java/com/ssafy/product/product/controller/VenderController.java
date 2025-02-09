package com.ssafy.product.product.controller;

import com.ssafy.product.global.util.response.ApiResponse;
import com.ssafy.product.product.dto.request.VenderRequestDto;
import com.ssafy.product.product.dto.response.VenderResponseDto;
import com.ssafy.product.product.service.VenderService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/venders")
@RequiredArgsConstructor
public class VenderController {
    private final VenderService venderService;

    @PostMapping
    public ResponseEntity<ApiResponse<VenderResponseDto>> registerVender(@Valid @RequestPart VenderRequestDto venderRequestDto,
                                                                         @RequestPart MultipartFile image,
                                                                         HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(HttpStatus.CREATED,venderService.registVender(venderRequestDto, image,request),"업체 등록"));
    }
}
