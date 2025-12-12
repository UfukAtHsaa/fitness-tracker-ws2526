package de.hsaa.fitness_tracker_service.presentation;

import de.hsaa.fitness_tracker_service.service.User;
import de.hsaa.fitness_tracker_service.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    @GetMapping("/users/me")
    public ResponseEntity<UserDetails> getMe() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            return ResponseEntity.ok((UserDetails) principal);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/users")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<List<User>> loadUsers() {
        return ResponseEntity.ok(userService.getAll());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.loadUserById(id);
        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user.get());
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        if (user.getId() != null) {
            return ResponseEntity.badRequest().build();
        }
        if (user.getName() == null || user.getName().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(userService.createUser(user));
    }
}
