package com.ssafy.schedule.framework.web.controller;

import com.ssafy.schedule.application.inputport.CreateScheduleInputPort;
import com.ssafy.schedule.application.inputport.GetScheduleInputPort;
import com.ssafy.schedule.common.response.ApiResponse;
import com.ssafy.schedule.common.util.JwtUtil;
import com.ssafy.schedule.domain.model.Schedule;
import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
import com.ssafy.schedule.framework.web.dto.input.UserInputDto;
import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

/**
 * 작성자   : 이병수
 * 작성날짜 : 2024-10-26
 * 설명    : usercase를 사용하는 프레임워크 헥사곤 controller 클래스
 */

@RestController
@RequestMapping("/schedules")
@RequiredArgsConstructor
public class ScheduleController {

    private final CreateScheduleInputPort createScheduleInputPort;
    private final GetScheduleInputPort getScheduleInputPort;
    private final JwtUtil jwtUtil;

    @PostMapping
    public ResponseEntity<ApiResponse<ScheduleOutputDto>> createSchedule(@RequestBody CreateScheduleInputDto requestDto, @RequestHeader("Authorization") String token) {
        token = token.substring(7);
        Long userId = jwtUtil.extractUserId(token);
        String code = jwtUtil.extractCode(token);
        requestDto.updateUserInfo(userId,code);

        ScheduleOutputDto scheduleOutputDto = createScheduleInputPort.createSchedule(requestDto);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(HttpStatus.OK,scheduleOutputDto, "일정 등록 성공하였습니다."));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ScheduleOutputDto>>> getSchedules(
            @RequestParam(value = "date", required = false) LocalDate time,
            @RequestHeader("Authorization") String token) throws Exception {

        UserInputDto userInputDto = setUserDto(token);
        List<ScheduleOutputDto> scheduleOutputDtoList = getScheduleInputPort.getAllSchedules(userInputDto,time);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success(HttpStatus.OK, scheduleOutputDtoList, "일정 불러오기 성공"));
    }


    /**
     * user 정보를 setting 하는 함수
     *
     * @param token
     * @return UserInputDto
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-10-28
     * @ 설명     : JWT 토큰을 통해 UserInputDto 객체를 설정합니다
     */
    private UserInputDto setUserDto(String token) {
        token = token.substring(7);
        Long userId = jwtUtil.extractUserId(token);
        String code = jwtUtil.extractCode(token);

        UserInputDto userInputDto = UserInputDto.builder()
                .userId(userId)
                .code(code).build();

        return userInputDto;
    }
}
