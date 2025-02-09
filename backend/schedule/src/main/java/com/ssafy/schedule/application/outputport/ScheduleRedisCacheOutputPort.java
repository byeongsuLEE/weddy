package com.ssafy.schedule.application.outputport;


import com.ssafy.schedule.domain.model.Schedule;
import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ScheduleRedisCacheOutputPort {

    void saveScheduleToCache(CreateScheduleInputDto createScheduleInputDto);
}
