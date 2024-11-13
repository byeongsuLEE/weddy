package com.example.user.common.service;

import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.channels.Channels;
import java.util.UUID;

@Slf4j
@Service
public class GCSImageService ***REMOVED***

    private final Storage storage;

    @Value("$***REMOVED***spring.cloud.gcp.storage.bucket***REMOVED***")
    private String bucketName;

    public GCSImageService(Storage storage) ***REMOVED***
        this.storage = storage;
    ***REMOVED***

    public String uploadImage(MultipartFile imageFile) ***REMOVED***
        String originalName = imageFile.getOriginalFilename();
        String ext = imageFile.getContentType();
        String uuid = UUID.randomUUID().toString();
        String fileName = uuid + "_" + originalName;
        String uploadPath = "https://storage.googleapis.com/" + bucketName + "/" + uuid;

        // BlobInfo 생성
        BlobInfo blobInfo = BlobInfo.newBuilder(bucketName, uuid)
                .setContentType(ext)
                .build();

        try ***REMOVED***
            // InputStream을 사용해 GCS에 이미지 업로드
            storage.create(blobInfo, imageFile.getInputStream());
            log.info("Image uploaded successfully. URL: ***REMOVED******REMOVED***", uploadPath);
            return uploadPath;

        ***REMOVED*** catch (IOException e) ***REMOVED***
            log.error("Failed to upload image to GCS", e);
            return null;
        ***REMOVED***
    ***REMOVED***
***REMOVED***
