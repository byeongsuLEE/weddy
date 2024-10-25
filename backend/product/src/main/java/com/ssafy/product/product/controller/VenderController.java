package com.ssafy.product.product.controller;

import com.ssafy.product.product.dto.request.VenderRequestDto;
import com.ssafy.product.product.dto.response.VenderResponseDto;
import com.ssafy.product.product.service.VenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/venders")
@RequiredArgsConstructor
public class VenderController ***REMOVED***
    private final VenderService venderService;

    @PostMapping
    public ResponseEntity<VenderResponseDto> registerVender(@RequestPart VenderRequestDto venderRequestDto, @RequestPart MultipartFile image) ***REMOVED***
        return ResponseEntity.status(HttpStatus.OK)
                .body(venderService.registVender(venderRequestDto, image));
    ***REMOVED***
***REMOVED***
