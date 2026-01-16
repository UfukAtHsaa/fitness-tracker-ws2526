package de.hsaa.fitness_tracker_service.service;

import de.hsaa.fitness_tracker_service.client.FootballApiClient;
import de.hsaa.fitness_tracker_service.client.dto.FootballMatchDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FootballService {

    private final FootballApiClient footballApiClient;

    public List<FootballMatchDto> getLastFiveGames(Long teamId) {
        return footballApiClient.getLastFiveGames(teamId);
    }
}
