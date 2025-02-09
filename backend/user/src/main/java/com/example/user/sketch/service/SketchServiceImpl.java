package com.example.user.sketch.service;

import com.example.user.common.dto.ErrorCode;
import com.example.user.common.exception.ImageUploadFailedException;
import com.example.user.common.service.GCSImageService;
import com.example.user.sketch.dto.request.SketchRequestDto;
import com.example.user.sketch.dto.response.SketchResponseDto;
import com.example.user.sketch.entity.Sketch;
import com.example.user.sketch.repository.SketchRepository;
import com.example.user.user.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SketchServiceImpl implements SketchService {
    private final SketchRepository sketchRepository;
    private final GCSImageService gcsImageService;

    @Override
    @Transactional
    public SketchResponseDto registerSketch(final SketchRequestDto sketchRequestDto, final MultipartFile image, final UserEntity user) {
        if(image != null && !image.isEmpty()){
            String imageUrl = gcsImageService.uploadImage(image);
            Sketch sketch = sketchRepository.save(Sketch.builder().requestDto(sketchRequestDto).image(imageUrl).user(user).build());
            return sketch.getUserSketch(sketch);
        }
        throw new ImageUploadFailedException(ErrorCode.IMAGE_UPLOAD_FAIL);
    }

    @Override
    public List<SketchResponseDto> getAllSketchesByUser(UserEntity user) {
        return sketchRepository.findByUser(user)
                .stream()
                .map(sketch -> sketch.getUserSketch(sketch))
                .toList();
    }
}
