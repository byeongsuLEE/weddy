package com.ssafy.schedule.framework.web.dto.input;

import com.ssafy.schedule.domain.model.ContractType;
import com.ssafy.schedule.domain.model.Schedule;
import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
public class CreateScheduleInputDto ***REMOVED***

    private ContractType contractType;
    private LocalDate starDate;
    private LocalDate endDate;
    private String content;
    private Long contractId;

    public ScheduleOutputDto mapToDto(Schedule schedule) ***REMOVED***
        return ScheduleOutputDto.builder()

                .contractType(schedule.getType())
                .starDate(schedule.getStartDate())
                .endDate(schedule.getEndDate())
                .content(schedule.getContent())
                .contractId(schedule.getContract_id())
                .build();
    ***REMOVED***

***REMOVED***
