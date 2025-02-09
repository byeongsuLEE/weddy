    package com.ssafy.schedule.application.inputport;

    import com.ssafy.schedule.application.outputport.FCMOutputPort;
    import com.ssafy.schedule.application.outputport.ScheduleOutPutPort;
    import com.ssafy.schedule.application.outputport.ScheduleRedisCacheOutputPort;
    import com.ssafy.schedule.application.usecase.CreateScheduleUsecase;
    import com.ssafy.schedule.domain.model.Schedule;
    import com.ssafy.schedule.framework.web.dto.input.CreateScheduleInputDto;
    import com.ssafy.schedule.framework.web.dto.output.ScheduleOutputDto;
    import lombok.RequiredArgsConstructor;
    import lombok.extern.slf4j.Slf4j;
    import org.springframework.stereotype.Service;
    import org.springframework.transaction.annotation.Transactional;


    @Slf4j
    @Service
    @Transactional
    @RequiredArgsConstructor
    public class CreateScheduleInputPort implements CreateScheduleUsecase {


        private final ScheduleOutPutPort scheduleOutPutPort;
        private final ScheduleRedisCacheOutputPort scheduleRedisCacheOutputPort;
        private final FCMOutputPort fcmOutputPort;

        @Override
        public ScheduleOutputDto createSchedule(CreateScheduleInputDto createScheduleInputDto) {

            Schedule schedule =   Schedule.createSchedule(createScheduleInputDto);
            Schedule savedSchedule = scheduleOutPutPort.save(schedule);

            log.info("fcm token : {} ",createScheduleInputDto.getUserCoupleToken().getMyFcmToken());
            //푸시알림을 위한 일정 저장
            scheduleRedisCacheOutputPort.saveScheduleToCache(createScheduleInputDto);
            fcmOutputPort.send(createScheduleInputDto.getUserCoupleToken().getMyFcmToken(),createScheduleInputDto.getType().name(),createScheduleInputDto.getContent());
            return createScheduleInputDto.mapToDto(savedSchedule);
        }
    }
