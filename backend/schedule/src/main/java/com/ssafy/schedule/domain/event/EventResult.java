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
public class EventResult implements Serializable ***REMOVED***

    private EventType eventType;
    private Boolean isSuccess;
    private Long contractId;
    private String paymentId;

    public static EventResult createEventResult(PaymentProductInfo paymentProductInfo) ***REMOVED***
        return EventResult.builder()
                .eventType(EventType.CONTRACT_PAYMENT)
                .isSuccess(false)
                .paymentId(paymentProductInfo.getPaymentId())
                .contractId(paymentProductInfo.getId())
                .build();
    ***REMOVED***

    public void updateIsSuccess(Boolean isSuccess) ***REMOVED***
        this.isSuccess = isSuccess;
    ***REMOVED***
***REMOVED***
