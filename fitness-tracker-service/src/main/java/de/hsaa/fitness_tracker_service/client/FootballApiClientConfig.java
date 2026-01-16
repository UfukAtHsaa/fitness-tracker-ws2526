package de.hsaa.fitness_tracker_service.client;

import feign.RequestInterceptor;
import feign.Retryer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

public class FootballApiClientConfig {

    @Value("${football.api.key}")
    private String apiKey;

    @Value("${football.api.host}")
    private String apiHost;

    @Bean
    public RequestInterceptor footballApiRequestInterceptor() {
        return requestTemplate -> {
            requestTemplate.header("x-rapidapi-key", apiKey);
            requestTemplate.header("x-rapidapi-host", apiHost);
        };
    }

    @Bean
    public Retryer footballApiRetryer() {
        // Retry once: period=100ms, maxPeriod=1000ms, maxAttempts=2 (initial + 1 retry)
        return new Retryer.Default(100, 1000, 2);
    }
}
