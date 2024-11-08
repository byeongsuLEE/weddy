package com.ssafy.schedule.domain.model;


import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import jakarta.persistence.*;
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
    @Enumerated(EnumType.STRING)
    private ContractType type;
    private Long productId;

    @Column(length = 10)
    private String code;

    //문제발생 : 도메인 모델에서 비지니스 로직을 작성할 때 메게변수는 dto로  해도되는지?
    public static Schedule createSchedule(CreateScheduleInputDto createScheduleInputDto)***REMOVED***
        //객체를 만들고 save까지 하는거같음 apator.save() 이런느낌

        Schedule schedule =   Schedule.builder()
                .startDate(createScheduleInputDto.getStartDate())
                .endDate(createScheduleInputDto.getEndDate())
                .content(createScheduleInputDto.getContent())
                .type(createScheduleInputDto.getType())
                .productId(createScheduleInputDto.getProductId())
                .code(createScheduleInputDto.getCode())
                .build();

//        Schedule schedule1 = createScheduleAdapter.save(schedule);
        return schedule;
    ***REMOVED***
***REMOVED***
