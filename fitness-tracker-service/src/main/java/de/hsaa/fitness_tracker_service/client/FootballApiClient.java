package de.hsaa.fitness_tracker_service.client;

import de.hsaa.fitness_tracker_service.client.dto.FootballMatchDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(
    name = "footballApiClient",
    url = "${football.api.url}",
    configuration = FootballApiClientConfig.class,
    fallback = FootballApiClientFallback.class
)
public interface FootballApiClient {

    @GetMapping("/football/last-five-games")
    List<FootballMatchDto> getLastFiveGames(@RequestParam("teamId") Long teamId);
}
