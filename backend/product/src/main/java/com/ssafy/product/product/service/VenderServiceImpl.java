package com.ssafy.product.product.service;

import com.ssafy.product.global.s3.S3Uploader;
import com.ssafy.product.global.util.JwtUtil;
import com.ssafy.product.product.domain.Vender;
import com.ssafy.product.product.dto.request.VenderRequestDto;
import com.ssafy.product.product.dto.response.VenderResponseDto;
import com.ssafy.product.product.repository.VenderRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class VenderServiceImpl implements VenderService {
    private final VenderRepository venderRepository;
    private final S3Uploader s3Uploader;
    private final JwtUtil jwtUtil;

    @Override
    public VenderResponseDto registVender(@Valid final VenderRequestDto venderRequestDto, final MultipartFile image, final HttpServletRequest request) {
        String s3Url = s3Uploader.putS3(image);
        Vender vender = Vender.builder().venderRequestDto(venderRequestDto).s3Url(s3Url).userId(jwtUtil.getUserId(jwtUtil.resolveToken(request))).build();
        venderRepository.save(vender);

        return VenderResponseDto.builder()
                .id(vender.getId())
                .name(vender.getName())
                .phone(vender.getPhone())
                .businessNumber(vender.getBusinessNumber())
                .address(vender.getAddress())
                .image(vender.getImageUrl())
                .build();
    }
}
