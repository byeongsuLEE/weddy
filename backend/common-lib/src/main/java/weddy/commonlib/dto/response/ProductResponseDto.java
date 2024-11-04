package weddy.commonlib.dto.response;

import lombok.Builder;
import weddy.commonlib.constant.ProductType;

import java.util.List;

@Builder
public record ProductResponseDto(Long id,
                                 String name,
                                 ProductType type,
                                 int price,
                                 String address,
                                 List<ProductImageResponseDto> images) ***REMOVED***
***REMOVED***
