package com.example.user.user.controller;

import com.example.user.common.service.GCSImageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/users/test")
public class TestController {

    private GCSImageService gcsImageService;
    public TestController(GCSImageService gcsImageService) {
        this.gcsImageService = gcsImageService;
    }

    @PostMapping("/image")
    public String testImage(@RequestParam("image") MultipartFile file){
        try {
            String url = gcsImageService.uploadImage(file);
            return url;
        }catch (Exception e){
            return "저런.."+e+e.getMessage();
        }
    }
}
