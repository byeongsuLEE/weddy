package com.ssafy.schedule.application.usecase;


import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;

public interface CreateScheduleUsecase {
     ScheduleOutputDto createSchedule(CreateScheduleInputDto createScheduleInputDto);
}
