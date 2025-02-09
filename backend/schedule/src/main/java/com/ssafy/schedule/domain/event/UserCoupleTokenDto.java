package com.ssafy.schedule.domain.event;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCoupleTokenDto {

    String myFcmToken;
    String coupleFcmToken;
}
