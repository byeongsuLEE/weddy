package weddy.commonlib.dto.response;

import lombok.Builder;
import lombok.Data;
import weddy.commonlib.constant.ProductType;

import java.time.LocalDate;

@Data
@Builder
public class CreateScheduleInputDto ***REMOVED***

    private LocalDate startDate;
    private LocalDate endDate;
    private ProductType type;
    private String content;
    private Long productId;
    private Long userId;
    private String code;
    private UserCoupleTokenDto userCoupleToken;


    public void updateUserInfo(Long userId, String code) ***REMOVED***
        this.userId = userId;
        this.code = code;
    ***REMOVED***
***REMOVED***
