package de.hsaa.fitness_tracker_service.service;

import de.hsaa.fitness_tracker_service.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class UserAuthService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {


        return userRepository.findByUsername(username)
                .map(dbUser ->
                        new User(dbUser.getUsername(), dbUser.getPassword(), buildAuthorities(dbUser.getRole())
                        )
                ).orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }

    private static List<SimpleGrantedAuthority> buildAuthorities(String role) {
        return new ArrayList<>(List.of(new SimpleGrantedAuthority(role)));
    }
}
