package weddy.commonlib.dto.response;

import lombok.Builder;
import java.time.LocalDate;

@Builder
public record ReviewResponseDto(Long id,
                                Long userId,
                                ProductResponseDto product,
                                String content,
                                LocalDate date,
                                Double score) ***REMOVED***
***REMOVED***
