package com.ssafy.schedule.domain.model;


import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import com.ssafy.schedule.framework.web.dto.input.ScheduleInputDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDate;

@Data
@Builder
@Entity
@NoArgsConstructor (access = AccessLevel.PROTECTED)
@AllArgsConstructor (access = AccessLevel.PROTECTED)
public class Schedule ***REMOVED***

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;
    private LocalDate startDate ;
    private LocalDate endDate ;
    private String content ;
    private ContractType type;
    private Long contract_id;

    //문제발생 : 도메인 모델에서 비지니스 로직을 작성할 때 메게변수는 dto로  해도되는지?
    public Schedule createSchedule(CreateScheduleInputDto createScheduleInputDto)***REMOVED***
        //객체를 만들고 save까지 하는거같음 apator.save() 이런느낌

        Schedule schedule =   Schedule.builder()
                .startDate(createScheduleInputDto.getStarDate())
                .endDate(createScheduleInputDto.getEndDate())
                .content(createScheduleInputDto.getContent())
                .type(createScheduleInputDto.getContractType())
                .contract_id(createScheduleInputDto.getContractId())
                .build();

        Schedule schedule1 = createScheduleAdapter.save(schedule);
        return schedule1;
    ***REMOVED***
***REMOVED***
