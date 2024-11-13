package com.example.user.common.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;

import java.io.FileInputStream;

@Configuration
public class FcmConfig ***REMOVED***

    @Value("classpath:keystore/service-account.json")
    private Resource resource;

    @Bean
    public FirebaseApp initializeFirebase() throws Exception ***REMOVED***
        if (FirebaseApp.getApps().isEmpty()) ***REMOVED***
            FileInputStream serviceAccount = new FileInputStream(resource.getFile());
            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();
            return FirebaseApp.initializeApp(options);
        ***REMOVED*** else ***REMOVED***
            return FirebaseApp.getInstance();
        ***REMOVED***
    ***REMOVED***
***REMOVED***
