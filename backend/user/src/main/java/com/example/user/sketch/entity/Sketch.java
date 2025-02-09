package com.example.user.sketch.entity;

import com.example.user.sketch.dto.request.SketchRequestDto;
import com.example.user.sketch.dto.response.SketchResponseDto;
import com.example.user.user.entity.UserEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Sketch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String image;

    private String studio;

    private String dressName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Builder
    public Sketch(SketchRequestDto requestDto, String image, UserEntity user) {
        this.image = image;
        this.studio = requestDto.studio();
        this.dressName = requestDto.dressName();
        this.user = user;
    }

    public SketchResponseDto getUserSketch(Sketch sketch) {
        return SketchResponseDto.builder()
                .id(sketch.id)
                .image(sketch.image)
                .studio(sketch.studio)
                .dressName(sketch.dressName)
                .user(user.getId())
                .build();
    }
}
