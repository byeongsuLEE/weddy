package com.ssafy.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@EnableAspectJAutoProxy // AOP 활성화
public class ProductApplication ***REMOVED***

	public static void main(String[] args) ***REMOVED***
		SpringApplication.run(ProductApplication.class, args);
	***REMOVED***

***REMOVED***
