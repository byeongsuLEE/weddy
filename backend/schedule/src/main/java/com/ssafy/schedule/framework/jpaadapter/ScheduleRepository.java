package com.ssafy.schedule.framework.jpaadapter;

import com.ssafy.schedule.domain.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * 작성자   : user
 * 작성날짜 : 2024-10-26
 * 설명    :
 */

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> ***REMOVED***

    Optional <List<Schedule>> findByCode(String code);
    Optional <Schedule> findById(Long id);
***REMOVED***
