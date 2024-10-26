package com.ssafy.schedule.framework.web.dto.output;

import com.ssafy.schedule.domain.model.ContractType;
import com.ssafy.schedule.domain.model.Schedule;
import lombok.Builder;
import lombok.Data;
import lombok.Value;

import java.time.LocalDate;

@Data
@Builder
public class ScheduleOutputDto ***REMOVED***

    // front로 보내는 response랑 같음

    private Long id;
    private ContractType contractType;
    private LocalDate starDate;
    private LocalDate endDate;
    private String content;
    private Long contractId;
    private String code;

    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-25
     * @ 설명     :

     * @param schedule
     * @return
     */

    public static ScheduleOutputDto mapToDto(Schedule schedule) ***REMOVED***
        return ScheduleOutputDto.builder()
                .id(schedule.getId())
                .contractType(schedule.getType())
                .starDate(schedule.getStartDate())
                .endDate(schedule.getEndDate())
                .content(schedule.getContent())
                .contractId(schedule.getContract_id())
                .code(schedule.getCode())
                .build();
    ***REMOVED***


***REMOVED***
