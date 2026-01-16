package de.hsaa.fitness_tracker_service.client.dto;

import lombok.Data;

@Data
public class FootballMatchDto {
    private Long id;
    private String round;
    private String date;
    private FootballCountryDto country;
    private FootballTeamDto awayTeam;
    private FootballTeamDto homeTeam;
    private FootballMatchLeagueDto league;
    private FootballMatchStateDto state;
}
