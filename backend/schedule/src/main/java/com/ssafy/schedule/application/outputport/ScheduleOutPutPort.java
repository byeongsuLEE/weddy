package com.ssafy.schedule.application.outputport;


import com.ssafy.schedule.domain.model.Schedule;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ScheduleOutPutPort {
    List<Schedule> getSchedules(String coupleId, LocalDate time);
    Optional<Schedule> getSchedule(Long scheduleId);
    Schedule save(Schedule schedule);
    List<Schedule> getSchedulesByCoupleCode(String coupleCode);
}
