package de.hsaa.fitness_tracker_service.presentation;

import lombok.Data;

@Data
public class UserResponse {
    private Long id;
    private String name;
    private String email;
    private Integer age;
    private String status;
}
