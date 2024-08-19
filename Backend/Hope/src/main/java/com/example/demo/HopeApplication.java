package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "entity")
public class HopeApplication {

	public static void main(String[] args) {
		SpringApplication springApplication=new SpringApplication(HopeApplication.class);
		springApplication.run(args);
	}

}
