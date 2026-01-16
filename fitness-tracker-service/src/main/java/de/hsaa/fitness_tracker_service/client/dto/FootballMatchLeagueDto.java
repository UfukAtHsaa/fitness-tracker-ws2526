package de.hsaa.fitness_tracker_service.client.dto;

import lombok.Data;

@Data
public class FootballMatchLeagueDto {
    private Long id;
    private Integer season;
    private String name;
    private String logo;
}
