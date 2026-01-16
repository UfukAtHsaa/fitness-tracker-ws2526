package de.hsaa.fitness_tracker_service.presentation;

import de.hsaa.fitness_tracker_service.client.dto.FootballMatchDto;
import de.hsaa.fitness_tracker_service.service.FootballService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/football")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8081"})
public class FootballController {

    private final FootballService footballService;

    @GetMapping("/last-five-games")
    public ResponseEntity<List<FootballMatchDto>> getLastFiveGames(
            @RequestParam Long teamId) {
        return ResponseEntity.ok(footballService.getLastFiveGames(teamId));
    }
}
