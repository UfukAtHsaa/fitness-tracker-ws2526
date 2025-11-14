package de.hsaa.fitness_tracker_service.presentation;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class UserRequest {
    private String name;
    private String email;
    private Integer age;
    private String status;
}
