package com.example.user.cart.dto.response;



import com.example.user.cart.dto.response.productImageResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartProductDto {
    Long id;
    String name;
    String type;
    int price;
    String address;
    String description;
    String vendorName;
    String vendorPhone;
    String vendorAddress;
    Long vendorId;
    List<productImageResponseDto> images;
}
