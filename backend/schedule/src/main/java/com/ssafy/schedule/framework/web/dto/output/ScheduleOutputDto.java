package com.ssafy.schedule.framework.web.dto.output;

import com.ssafy.schedule.domain.event.ProductType;
import com.ssafy.schedule.domain.model.ContractType;
import com.ssafy.schedule.domain.model.Schedule;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class ScheduleOutputDto {

    // front로 보내는 response랑 같음

    private Long id;
    private ProductType contractType;
    private LocalDate startDate;
    private LocalDate endDate;
    private String content;
    private Long productId;
    private String code;

    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-25
     * @ 설명     :

     * @param schedule
     * @return
     */

    public static ScheduleOutputDto mapToDto(Schedule schedule) {
        return ScheduleOutputDto.builder()
                .id(schedule.getId())
                .contractType(schedule.getType())
                .startDate(schedule.getStartDate())
                .endDate(schedule.getEndDate())
                .content(schedule.getContent())
                .productId(schedule.getProductId())
                .code(schedule.getCode())
                .build();
    }


}
