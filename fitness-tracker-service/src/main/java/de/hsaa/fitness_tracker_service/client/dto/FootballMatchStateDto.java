package de.hsaa.fitness_tracker_service.client.dto;

import lombok.Data;

@Data
public class FootballMatchStateDto {
    private String description;
    private Integer clock;
    private FootballMatchScoreDto score;
}
