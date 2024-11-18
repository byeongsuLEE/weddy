package ssafy.cachescheduler.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;

import java.util.concurrent.Executor;

@Configuration
public class SchedulerConfig ***REMOVED***
    @Value("$***REMOVED***scheduler.pool-size***REMOVED***")
    private int pollSize;
    @Value("$***REMOVED***scheduler.await-termination-seconds***REMOVED***")
    private int awaitTerminationSeconds;
    @Value("$***REMOVED***async.core-pool-size***REMOVED***")
    private int corePoolSize;
    @Value("$***REMOVED***async.max-poll-size***REMOVED***")
    private int maxPoolSize;
    @Value("$***REMOVED***async.queue-capacity***REMOVED***")
    private int queueCapacity;

    @Bean
    public ThreadPoolTaskScheduler taskScheduler() ***REMOVED***
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setPoolSize(pollSize); // 동시에 실행될 수 있는 최대 스케줄링 작업 수(쓰레드 풀)
        scheduler.setThreadNamePrefix("Scheduler-"); // 쓰레드 이름 접두사 설정
        scheduler.setAwaitTerminationSeconds(awaitTerminationSeconds); // 플리케이션 종료 시, 스케줄링 작업이 완료될 때까지 대기하는 시간
        scheduler.setWaitForTasksToCompleteOnShutdown(true); // 애플리케이션 종료 시, 스케줄링 작업이 완료될 때까지 기다릴지 여부
        return scheduler;
    ***REMOVED***

    @Bean(name = "taskExecutor")
    public Executor taskExecutor() ***REMOVED***
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(corePoolSize); // 기본 쓰레드 수
        executor.setMaxPoolSize(maxPoolSize);  // 최대 쓰레드 수
        executor.setQueueCapacity(queueCapacity); // 큐 용량
        executor.setThreadNamePrefix("AsyncExecutor-");
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.setAwaitTerminationSeconds(awaitTerminationSeconds);
        executor.initialize();
        return executor;
    ***REMOVED***
***REMOVED***