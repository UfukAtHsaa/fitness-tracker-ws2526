package de.hsaa.fitness_tracker_service.presentation;

import de.hsaa.fitness_tracker_service.service.User;
import de.hsaa.fitness_tracker_service.service.UserService;
import de.hsaa.fitness_tracker_service.presentation.UserResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Base64;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestHeader("Authorization") String authHeader) {
        try {
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded);
            final String[] values = credentials.split(":", 2);

            if (values.length != 2) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid authorization token");
            }

            String username = values[0];
            String password = values[1];

            User user = userService.authenticate(username, password);

            if (user != null) {
                UserResponse response = new UserResponse(
                        user.getId(),
                        user.getUsername(),
                        user.getName(),
                        user.getRole(),
                        user.getEmail()
                );
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during login");
        }
    }
}