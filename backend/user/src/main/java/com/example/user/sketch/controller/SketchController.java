package com.example.user.sketch.controller;

import com.example.user.common.dto.ApiResponse;
import com.example.user.sketch.dto.request.SketchRequestDto;
import com.example.user.sketch.dto.response.SketchResponseDto;
import com.example.user.sketch.service.SketchService;
import com.example.user.user.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users/sketch")
public class SketchController {
    private final SketchService sketchService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<SketchResponseDto>>> getAllSketchByUser(@AuthenticationPrincipal UserEntity user) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(ApiResponse.success(sketchService.getAllSketchesByUser(user),"사용자 스케치 리스트"));
    }

    @PostMapping()
    public ResponseEntity<ApiResponse<SketchResponseDto>> registerSketch(@RequestPart(name = "sketch") SketchRequestDto requestDto, @RequestPart MultipartFile image, @AuthenticationPrincipal UserEntity user) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(ApiResponse.success(sketchService.registerSketch(requestDto,image,user),"사용자 스케치 등록"));
    }
}
