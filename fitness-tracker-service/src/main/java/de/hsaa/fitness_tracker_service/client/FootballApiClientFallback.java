package de.hsaa.fitness_tracker_service.client;

import de.hsaa.fitness_tracker_service.client.dto.FootballMatchDto;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;

@Component
public class FootballApiClientFallback implements FootballApiClient {

    @Override
    public List<FootballMatchDto> getLastFiveGames(Long teamId) {
        return Collections.emptyList();
    }
}
