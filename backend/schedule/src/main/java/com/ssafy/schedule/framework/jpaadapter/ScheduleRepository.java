package com.ssafy.schedule.framework.jpaadapter;

import com.ssafy.schedule.domain.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-26
 * 설명    :
 */

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {


    // 아래코드가 mysql에 어떤 코드로 변환되는지 코드로 작성해주시오.
    // select s from  Schedule s  where  s.code = :code and (:date is null   or s.endDate = :date)
    @Query("select s from  Schedule s  where  s.code = :code and (:date is null or s.endDate = :date)")
  List<Schedule> findByCodeAndDate(@Param("code") String code, @Param("date") LocalDate date);

    Optional <Schedule> findById(Long id);

    List<Schedule> findByCode(String coupleCode);
}
