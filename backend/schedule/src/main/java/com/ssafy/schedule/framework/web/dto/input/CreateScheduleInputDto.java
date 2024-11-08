package com.ssafy.schedule.framework.web.dto.input;

import com.ssafy.schedule.domain.event.PaymentProductInfo;
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
public class CreateScheduleInputDto ***REMOVED***

    private LocalDate startDate;
    private LocalDate endDate;
    private ContractType type;
    private String content;
    private Long productId;
    private Long userId;
    private String code;
    private UserCoupleTokenDto userCoupleToken;

    public static CreateScheduleInputDto  createScheduleInputDto(LocalDate startDate, LocalDate endDate, String content, Long productId, Long userId, String code, UserCoupleTokenDto userCoupleToken ) ***REMOVED***
        return CreateScheduleInputDto.builder()
                .startDate(startDate)
                .endDate(endDate)
                .content(content)
                .productId(productId)
                .userId(userId)
                .code(code)
                .userCoupleToken(userCoupleToken)
                .build();
    ***REMOVED***

    public static CreateScheduleInputDto createScheduleInputDto(PaymentProductInfo paymentProductInfo)
    ***REMOVED***
        return CreateScheduleInputDto.builder()
                .startDate((paymentProductInfo.getStartDate()))
                .endDate((paymentProductInfo.getEndDate()))
                .content(paymentProductInfo.getProduct().getProductContent())
                .productId(paymentProductInfo.getProduct().getProductId())
                .userId(paymentProductInfo.getUserId())
                .code(paymentProductInfo.getCode())
                .userCoupleToken(paymentProductInfo.getUserCoupleToken())
                .build();
    ***REMOVED***

    public ScheduleOutputDto mapToDto(Schedule schedule) ***REMOVED***
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
    ***REMOVED***

    public void updateUserInfo(Long userId, String code) ***REMOVED***
        this.userId = userId;
        this.code = code;
    ***REMOVED***
***REMOVED***
