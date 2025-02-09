package com.ssafy.product.global.s3;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Component
@Service
public class S3Uploader {
    private final String IMAGE_DIR = "weddy/images/";
    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;


    private String imgPath() {
        return IMAGE_DIR + UUID.randomUUID(); // 파일 경로 반환
    }

    public String putS3(MultipartFile multipartFile) {
        String imagePath = imgPath();

        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType(multipartFile.getContentType());
        metadata.setContentLength(multipartFile.getSize());
        try {
            amazonS3Client.putObject(bucket, imagePath, multipartFile.getInputStream(), metadata);
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload image to S3", e);
        }
        return amazonS3Client.getUrl(bucket, imagePath).toString(); // 업로드된 파일의 S3 URL 주소 반환
    }

    public void deleteS3(String path) {
        String splitStr = ".com/";
        String fileName = path.substring(path.lastIndexOf(splitStr) + splitStr.length());

        amazonS3Client.deleteObject(new DeleteObjectRequest(bucket, fileName));
    }

}
