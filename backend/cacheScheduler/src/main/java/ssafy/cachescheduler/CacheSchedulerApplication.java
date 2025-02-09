package ssafy.cachescheduler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.retry.annotation.EnableRetry;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableAsync       // 비동기 처리 활성화
@EnableRetry       // Retry 기능 활성화
public class CacheSchedulerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CacheSchedulerApplication.class, args);
	}

}
