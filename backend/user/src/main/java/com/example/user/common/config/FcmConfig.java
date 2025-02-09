package com.example.user.common.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

@Configuration
public class FcmConfig {

    @Bean
    public FirebaseApp initializeFirebase() throws IOException {
        // InputStream을 통해 classpath 리소스를 읽어옴
        try (InputStream serviceAccount = new ClassPathResource("keystore/service-account.json").getInputStream()) {
            FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();

            return FirebaseApp.initializeApp(options);
        } catch (FileNotFoundException e) {
            throw new RuntimeException("Firebase service account 파일을 찾을 수 없습니다.", e);
        }
    }
}
