package com.ssafy.schedule.domain.event;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class EventResult implements Serializable {

    private EventType eventType;
    private Boolean isSuccess;
    private Long contractId;
    private String paymentId;

    public static EventResult createEventResult(PaymentProductInfo paymentProductInfo) {
        return EventResult.builder()
                .eventType(EventType.CONTRACT_PAYMENT)
                .isSuccess(false)
                .paymentId(paymentProductInfo.getPaymentId())
                .contractId(paymentProductInfo.getId())
                .build();
    }

    public void updateIsSuccess(Boolean isSuccess) {
        this.isSuccess = isSuccess;
    }
}
