package com.ssafy.schedule.framework.jpaadapter;

import com.ssafy.schedule.application.outputport.ScheduleOutPutPort;
import com.ssafy.schedule.domain.model.Schedule;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-26
 * 설명    :
 */

@Repository
@RequiredArgsConstructor
public class ScheduleJpaAdapter implements ScheduleOutPutPort ***REMOVED***

    private final ScheduleRepository scheduleRepository;


    /**
     * 전체 일정 조회
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-29
     * @ 설명     : endDate를 기준으로 전체 일정 조회
     * @param coupleCode
     * @param date
     * @return
     */
    @Override
    public Optional<List<Schedule>> getSchedules(String coupleCode, LocalDate date) ***REMOVED***
        return scheduleRepository.findByCodeAndDate(coupleCode,date);
    ***REMOVED***

    @Override
    public Optional<Schedule> getSchedule(Long scheduleId) ***REMOVED***
        return scheduleRepository.findById(scheduleId);
    ***REMOVED***

    @Override
    public Schedule save(Schedule schedule) ***REMOVED***
            return scheduleRepository.save(schedule);
    ***REMOVED***
***REMOVED***
