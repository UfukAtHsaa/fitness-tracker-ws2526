package de.hsaa.fitness_tracker_service.presentation;

import lombok.Data;

@Data
public class UserResponse {
    private Long id;
    private String username;
    private String name;
    private String role;
    private String email;

    public UserResponse(Long id, String username, String name, String role, String email) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.role = role;
        this.email = email;
    }
}
