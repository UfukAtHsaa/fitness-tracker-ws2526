package de.hsaa.fitness_tracker_service.service;

import de.hsaa.fitness_tracker_service.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    // Simmuliere die Klasse die aufgerufen wird
    @Mock
    private UserRepository userRepository;

    // Fuege die simmulierte Klasse in den zu testenden
    // service ein
    @InjectMocks
    private UserService userService;


    @Test
    @DisplayName("Create User test with generated ID.")
    void createUserWithNewIdReturnedTest() {

        // Arrange
        Mockito.when(
                userRepository.save(Mockito.any(User.class))
        ).thenReturn(new User(1L, "ufuk", "ufuk", "password", "user", "email", 27, "adult"));

        // Act
        User returnedUser = userService.createUser(new User());

        // Assert
        Assertions.assertEquals(1l, returnedUser.getId());
    }

    @Test
    @DisplayName("Create User test with explicit User Info.")
    void createUserWithExplicitUserInfoTest() {

        // Arrange
        User userCreateRequest = new User(null, "ufuk r", "ufuk r", "password", "user", "email - r", 27, "adult r ");
        Mockito.when(
                userRepository.save(Mockito.eq(userCreateRequest))
        ).thenReturn(new User(1L, "ufuk - a", "ufuk - a", "password", "user", "email", 27, "adult"));

        // Act
        User returnedUser = userService.createUser(userCreateRequest);

        // Assert
        Assertions.assertEquals(1l, returnedUser.getId());
        Assertions.assertEquals("ufuk - a", returnedUser.getName());

//        Mockito.verify(userRepository, Mockito.times(1)).save(Mockito.any());
//        Mockito.verifyNoInteractions(userRepository);
    }

    @Test
    @DisplayName("Delete User Test")
    void deleteUserTest() {

        // Arrange

        // Act
        userService.deleteUser(1l);

        // Assert
       Mockito.verify(
               userRepository, Mockito.times(1)
       ).deleteById(1l);
    }
}