package com.example.user.sketch.service;

import com.example.user.sketch.dto.request.SketchRequestDto;
import com.example.user.sketch.dto.response.SketchResponseDto;
import com.example.user.user.entity.UserEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface SketchService {
    SketchResponseDto registerSketch(final SketchRequestDto sketchRequestDto, final MultipartFile image , final UserEntity user);
    List<SketchResponseDto> getAllSketchesByUser(final UserEntity user);
}
