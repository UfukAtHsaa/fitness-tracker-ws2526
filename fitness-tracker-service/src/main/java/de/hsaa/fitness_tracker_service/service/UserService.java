package de.hsaa.fitness_tracker_service.service;

import de.hsaa.fitness_tracker_service.presentation.UserRequest;
import de.hsaa.fitness_tracker_service.presentation.UserResponse;
import de.hsaa.fitness_tracker_service.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public User createUser(User user) {
        User savedUser = userRepository.save(user);
        return savedUser;
    }

    public Optional<User> loadUserById(Long id) {
        return userRepository.findById(id);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public UserResponse createUserWithRequest(UserRequest userRequest) {
        return null;
    }

    public UserResponse loadUserResponseById(Long userId) {
        return null;
    }

    public UserResponse updateUserWithRequest(Long userId, UserRequest userRequest) {
            return null;
    }



    public User authenticate(String username, String password) {
        Optional<User> userOptional = userRepository.findByUsername(username);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(password)) {
                return user;
            }
        }

        return null;
    }
}
