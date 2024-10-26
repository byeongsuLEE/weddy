package com.ssafy.schedule.application.inputport;

import com.ssafy.schedule.application.outputport.ScheduleOutPutPort;
import com.ssafy.schedule.application.usecase.GetScheduleUsecase;
import com.ssafy.schedule.framework.web.dto.input.UserInputDto;
import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-26
 * 설명    :
 */

@Service
@Transactional
@RequiredArgsConstructor
public class GetScheduleInputPort implements GetScheduleUsecase ***REMOVED***

    private final ScheduleOutPutPort scheduleOutPutPort;

    @Override
    public List<ScheduleOutputDto> getAllSchedules(UserInputDto userInputDto) throws Exception ***REMOVED***
        return scheduleOutPutPort.getSchedules(userInputDto.getCode())
                .orElseThrow(() -> new RuntimeException("스케줄을 찾을 수 없습니다."))
                .stream()
                .map(ScheduleOutputDto::mapToDto)
                .collect(Collectors.toList());
    ***REMOVED***

    @Override
    public ScheduleOutputDto getSchedule(UserInputDto userInputDto) throws Exception ***REMOVED***
        return null;
    ***REMOVED***
***REMOVED***
