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
public class TestController ***REMOVED***

    private GCSImageService gcsImageService;
    public TestController(GCSImageService gcsImageService) ***REMOVED***
        this.gcsImageService = gcsImageService;
    ***REMOVED***

    @PostMapping("/image")
    public String testImage(@RequestParam("image") MultipartFile file)***REMOVED***
        try ***REMOVED***
            String url = gcsImageService.uploadImage(file);
            return url;
        ***REMOVED***catch (Exception e)***REMOVED***
            return "저런.."+e+e.getMessage();
        ***REMOVED***
    ***REMOVED***
***REMOVED***
