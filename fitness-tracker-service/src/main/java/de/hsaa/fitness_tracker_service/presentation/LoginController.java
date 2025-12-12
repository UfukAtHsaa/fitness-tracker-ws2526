package de.hsaa.fitness_tracker_service.presentation;

import de.hsaa.fitness_tracker_service.service.User;
import de.hsaa.fitness_tracker_service.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class LoginController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestHeader("Authorization") String authHeader) {
        try {
            // Entferne "Basic " Präfix falls vorhanden
            String base64Credentials = authHeader.replace("Basic ", "");

            // Dekodiere Base64
            byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(decodedBytes);

            // Trenne Username und Passwort (Format: username:password)
            String[] parts = credentials.split(":", 2);
            if (parts.length != 2) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Ungültiges Format");
            }

            String username = parts[0];
            String password = parts[1];

            // Authentifiziere Benutzer
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
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body("Ungültige Anmeldedaten");
            }

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Ungültiges Base64-Format");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fehler bei der Anmeldung");
        }
    }
}
