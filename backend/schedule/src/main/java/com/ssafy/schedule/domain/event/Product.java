package com.ssafy.schedule.domain.event;


import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Embeddable
public class Product ***REMOVED***
    private Long product_id;
    private String product_content;
    private String product_name;
    private ProductType type;
***REMOVED***
