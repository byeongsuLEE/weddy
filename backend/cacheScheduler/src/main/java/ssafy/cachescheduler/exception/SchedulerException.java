package ssafy.cachescheduler.exception;

public class SchedulerException extends RuntimeException{
    public SchedulerException(Exception e) {
        super("스케줄러 실패 : " + e.getMessage());
    }
}
