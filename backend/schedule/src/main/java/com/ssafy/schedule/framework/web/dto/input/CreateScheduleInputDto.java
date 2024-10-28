package com.ssafy.schedule.framework.web.dto.input;

import com.ssafy.schedule.domain.model.ContractType;
import com.ssafy.schedule.domain.model.Schedule;
import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class CreateScheduleInputDto ***REMOVED***

    private ContractType contractType;
    private LocalDate startDate;
    private LocalDate endDate;
    private ContractType type;
    private String content;
    private Long contractId;
    private Long userId;
    private String code;

    public ScheduleOutputDto mapToDto(Schedule schedule) ***REMOVED***
        return ScheduleOutputDto.builder()
                .id(schedule.getId())

                .contractType(schedule.getType())
                .startDate(schedule.getStartDate())
                .endDate(schedule.getEndDate())
                .content(schedule.getContent())
                .contractId(schedule.getContract_id())
                .code(schedule.getCode())
                .contractType(schedule.getType())
                .build();
    ***REMOVED***

    public void updateUserInfo(Long userId, String code) ***REMOVED***
        this.userId = userId;
        this.code = code;
    ***REMOVED***
***REMOVED***
