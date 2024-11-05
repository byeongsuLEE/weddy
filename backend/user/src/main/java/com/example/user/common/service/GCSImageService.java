package com.example.user.common.service;

import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Component
public class GCSImageService ***REMOVED***

    @Autowired
    Storage storage;

    @Value("$***REMOVED***spring.cloud.gcp.storage.bucket***REMOVED***") // application.yml에 써둔 bucket 이름
    private String bucketName;

    public String uploadImage(MultipartFile file) throws IOException ***REMOVED***
        // 고유한 파일 이름 생성
        String uuid = UUID.randomUUID().toString();
        // 파일 확장자 추출
        String ext = file.getContentType().split("/")[1]; // 예: image/jpeg에서 jpeg 추출
        // 확장자를 포함한 파일 이름 생성
        String fileName = uuid + "." + ext;

        // BlobInfo 설정 및 파일 업로드
        BlobInfo blobInfo = BlobInfo.newBuilder(bucketName, fileName)
                .setContentType(file.getContentType()) // 파일의 ContentType 설정
                .build();
        storage.create(blobInfo, file.getInputStream());

        // 파일의 GCS URL 생성
        String imageUrl = String.format("https://storage.googleapis.com/%s/%s", bucketName, fileName);

        return imageUrl; // 업로드된 이미지의 URL 반환
    ***REMOVED***
***REMOVED***
