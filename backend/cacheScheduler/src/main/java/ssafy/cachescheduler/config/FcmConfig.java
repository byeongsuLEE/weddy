package ssafy.cachescheduler.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.FileInputStream;

@Configuration
public class FcmConfig ***REMOVED***

    @Value("classpath:keystore/service-account.json")
    private Resource resource;

    @PostConstruct
    public void initFirebase() ***REMOVED***
        try ***REMOVED***
            // Service Account를 이용하여 Fireabse Admin SDK 초기화
            FileInputStream serviceAccount = new FileInputStream(resource.getFile());
            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();
            FirebaseApp.initializeApp(options);

        ***REMOVED*** catch (Exception e) ***REMOVED***
            e.printStackTrace();
        ***REMOVED***
    ***REMOVED***
***REMOVED***
