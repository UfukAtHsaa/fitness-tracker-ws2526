package de.hsaa.fitness_tracker_service.presentation;

import de.hsaa.fitness_tracker_service.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for User Management
 * <p>
 * Clean Code Principles applied:
 * - Single Responsibility: Controller only handles HTTP layer
 * - Clear naming conventions
 * - Proper separation of concerns
 * - Input validation
 * - Appropriate error handling
 */
@RestController
@RequestMapping("/api/users")
public class UserControllerGood {

    private final UserService userService;

    // Dependency Injection for better testability
    public UserControllerGood(UserService userService) {
        this.userService = userService;
    }

    /**
     * Creates a new user
     *
     * @param userRequest validated user data
     * @return created user with HTTP 201 status
     */
    @PostMapping
    public ResponseEntity<UserResponse> createUser(@RequestBody UserRequest userRequest) {
        UserResponse createdUser = userService.createUserWithRequest(userRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    /**
     * Retrieves a user by ID
     *
     * @param userId the user identifier
     * @return user data with HTTP 200 status
     */
    @GetMapping("/{userId}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long userId) {
        UserResponse user = userService.loadUserResponseById(userId);
        return ResponseEntity.ok(user);
    }

    /**
     * Updates an existing user
     *
     * @param userId      the user identifier
     * @param userRequest validated updated user data
     * @return updated user with HTTP 200 status
     */
    @PutMapping("/{userId}")
    public ResponseEntity<UserResponse> updateUser(
            @PathVariable Long userId,
            @RequestBody UserRequest userRequest) {

        UserResponse updatedUser = userService.updateUserWithRequest(userId, userRequest);
        return ResponseEntity.ok(updatedUser);
    }

    /**
     * Deletes a user
     *
     * @param userId the user identifier
     * @return HTTP 204 No Content status
     */
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }
}