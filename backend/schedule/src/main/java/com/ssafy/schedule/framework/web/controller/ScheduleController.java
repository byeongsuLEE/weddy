package com.ssafy.schedule.framework.web.controller;

import com.ssafy.schedule.application.inputport.CreateScheduleInputPort;
import com.ssafy.schedule.application.inputport.GetScheduleInputPort;
import com.ssafy.schedule.domain.model.Schedule;
import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * 작성자   : 이병수
 * 작성날짜 : 2024-10-26
 * 설명    : usercase를 사용하는 프레임워크 헥사곤 controller 클래스
 */

@RestController
@RequestMapping("/api/schedules")
@RequiredArgsConstructor
public class ScheduleController ***REMOVED***

    private final CreateScheduleInputPort createScheduleInputPort;
    private final GetScheduleInputPort getScheduleInputPort;



    @PostMapping
    public void createSchedule(@RequestBody CreateScheduleInputDto requestDto,
                               @RequestHeader("userId") ) ***REMOVED***

    ***REMOVED***

***REMOVED***
