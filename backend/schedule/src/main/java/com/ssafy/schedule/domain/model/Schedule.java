package com.ssafy.schedule.domain.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
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
    public Schedule createSchedule(ScheduleDto scheduleDto)***REMOVED***

    ***REMOVED***
***REMOVED***
