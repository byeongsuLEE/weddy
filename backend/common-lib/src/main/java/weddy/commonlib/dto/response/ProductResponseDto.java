package weddy.commonlib.dto.response;

import lombok.*;
import weddy.commonlib.constant.ProductType;

import java.util.ArrayList;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductResponseDto ***REMOVED***
    private Long id;
    private String name;
    private ProductType type;
    private int price;
    private String address;
    private List<ProductImageResponseDto> images = new ArrayList<>();
***REMOVED***
