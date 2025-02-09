package ssafy.cachescheduler.mapper;

import org.apache.ibatis.annotations.Mapper;
import weddy.commonlib.dto.response.ProductResponseDto;

import java.util.List;

@Mapper
public interface ProductMapper {
    List<ProductResponseDto> getAllProducts();
}
