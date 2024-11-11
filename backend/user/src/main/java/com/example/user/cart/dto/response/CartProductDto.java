package com.example.user.cart.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartProductDto ***REMOVED***
    Long id;
    String address;
    String name;
    int price;
    String type;
    List<productImageResponseDto> images;
***REMOVED***
