package com.ssafy.schedule.framework.web.dto.input;

import com.ssafy.schedule.domain.event.PaymentProductInfo;
import com.ssafy.schedule.domain.event.ProductType;
import com.ssafy.schedule.domain.event.UserCoupleTokenDto;
import com.ssafy.schedule.domain.model.ContractType;
import com.ssafy.schedule.domain.model.Schedule;
import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;
import lombok.*;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateScheduleInputDto {

    private LocalDate startDate;
    private LocalDate endDate;
    private ProductType type;
    private String content;
    private Long productId;
    private Long userId;
    private String code;
    private UserCoupleTokenDto userCoupleToken;

    public static CreateScheduleInputDto  createScheduleInputDto(LocalDate startDate, LocalDate endDate, String content, Long productId, Long userId, String code, UserCoupleTokenDto userCoupleToken ) {
        return CreateScheduleInputDto.builder()
                .startDate(startDate)
                .endDate(endDate)
                .content(content)
                .productId(productId)
                .userId(userId)
                .code(code)
                .userCoupleToken(userCoupleToken)
                .build();
    }

    public static CreateScheduleInputDto createScheduleInputDto(PaymentProductInfo paymentProductInfo)
    {
        return CreateScheduleInputDto.builder()
                .startDate((paymentProductInfo.getStartDate()))
                .endDate((paymentProductInfo.getEndDate()))
                .content(paymentProductInfo.getTitle())
                .productId(paymentProductInfo.getProduct().getProductId())
                .userId(paymentProductInfo.getUserId())
                .code(paymentProductInfo.getCode())
                .userCoupleToken(paymentProductInfo.getUserCoupleToken())
                .type(paymentProductInfo.getProduct().getType())
                .build();
    }

    public ScheduleOutputDto mapToDto(Schedule schedule) {
        return ScheduleOutputDto.builder()
                .id(schedule.getId())

                .contractType(schedule.getType())
                .startDate(schedule.getStartDate())
                .endDate(schedule.getEndDate())
                .content(schedule.getContent())
                .productId(schedule.getProductId())
                .code(schedule.getCode())
                .contractType(schedule.getType())
                .build();
    }

    public void updateUserInfo(Long userId, String code) {
        this.userId = userId;
        this.code = code;
    }
}
