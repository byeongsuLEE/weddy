package com.ssafy.schedule.application.outputport;


import com.ssafy.schedule.domain.model.Schedule;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface ScheduleOutPutPort ***REMOVED***
    Optional<List<Schedule>> getSchedules(String coupleId, LocalDateTime time);
    Optional<Schedule> getSchedule(Long scheduleId);
    Schedule save(Schedule schedule);

***REMOVED***
