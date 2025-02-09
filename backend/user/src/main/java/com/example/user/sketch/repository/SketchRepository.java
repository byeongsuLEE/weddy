package com.example.user.sketch.repository;

import com.example.user.sketch.entity.Sketch;
import com.example.user.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SketchRepository extends JpaRepository<Sketch, Long> {
    List<Sketch> findByUser(UserEntity user);
}
