package com.ssafy.schedule.application.inputport;

import com.ssafy.schedule.application.outputport.ScheduleOutPutPort;
import com.ssafy.schedule.application.usecase.GetScheduleUsecase;
import com.ssafy.schedule.common.exception.ScheduleNotFoundException;
import com.ssafy.schedule.common.response.ErrorCode;
import com.ssafy.schedule.framework.web.dto.input.UserInputDto;
import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-26
 * 설명    :
 */

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class GetScheduleInputPort implements GetScheduleUsecase ***REMOVED***

    private final ScheduleOutPutPort scheduleOutPutPort;

    @Override
    public List<ScheduleOutputDto> getAllSchedules(UserInputDto userInputDto, LocalDate time) throws Exception ***REMOVED***
        return scheduleOutPutPort.getSchedules(userInputDto.getCode(),time)
                .orElseThrow(() -> new ScheduleNotFoundException(ErrorCode.SCHEDULE_IS_EMPTY))
                .stream()
                .map(ScheduleOutputDto::mapToDto)
                .collect(Collectors.toList());
    ***REMOVED***

    @Override
    public ScheduleOutputDto getSchedule(UserInputDto userInputDto, LocalDateTime localDateTime) throws Exception ***REMOVED***
        return null;
    ***REMOVED***
***REMOVED***
