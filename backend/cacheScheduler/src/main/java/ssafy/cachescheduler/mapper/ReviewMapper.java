package ssafy.cachescheduler.mapper;

import org.apache.ibatis.annotations.Mapper;
import weddy.commonlib.dto.response.ReviewResponseDto;

import java.util.List;

@Mapper
public interface ReviewMapper {
    List<ReviewResponseDto> getAllReviews();
}
