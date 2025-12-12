package de.hsaa.fitness_tracker_service.presentation.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class BasicAuthenticationConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/h2-console/**", "/public/**").permitAll()
                        .requestMatchers(HttpMethod.OPTIONS, "/api/**").permitAll() // allow CORS preflight
                        .requestMatchers("/api/**").authenticated() // protect all API endpoints
                        .anyRequest().permitAll() // everything else is public
                )
                .headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin))
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers("/h2-console/**", "/api/**") // disable CSRF for H2 and API
                )
                .httpBasic(withDefaults()); // enable HTTP Basic auth
        return httpSecurity.build();
    }
}
