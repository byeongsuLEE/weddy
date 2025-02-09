package com.ssafy.schedule.framework.web.dto.input;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-26
 * 설명    :
 */

@Builder
@Data
public class UserInputDto {
    Long userId;
    String code;
}
