package de.hsaa.fitness_tracker_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class FitnessTrackerServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FitnessTrackerServiceApplication.class, args);
	}

}