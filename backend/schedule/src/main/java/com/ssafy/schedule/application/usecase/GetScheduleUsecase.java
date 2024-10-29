package com.ssafy.schedule.application.usecase;

import com.ssafy.schedule.framework.web.dto.input.UserInputDto;
import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-26
 * 설명    :
 */
public interface GetScheduleUsecase ***REMOVED***
    public List<ScheduleOutputDto> getAllSchedules(UserInputDto userInputDto, LocalDateTime time) throws Exception;
    public ScheduleOutputDto getSchedule(UserInputDto userInputDto, LocalDateTime localDateTime) throws Exception;


***REMOVED***
