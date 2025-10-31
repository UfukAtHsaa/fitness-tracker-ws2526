package de.hsaa.fitness_tracker_service.service;

import de.hsaa.fitness_tracker_service.repository.CourseRepository;
import de.hsaa.fitness_tracker_service.repository.UserRepository;
import de.hsaa.fitness_tracker_service.service.exceptions.CourseNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    public List<Course> loadAllCourses() {
        return courseRepository.findAll();
    }

    public void addUserToCourse(Long courseId, Long userId) {

        Optional<Course> courseOptional = courseRepository.findById(courseId);
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            throw new CourseNotFoundException("User with id " + userId + " not found.");
        }
        if (courseOptional.isPresent()) {
            // add user to course logic here
            courseOptional.get().getUsers().add(userOptional.get());
            courseRepository.save(courseOptional.get());
        } else {
            throw new CourseNotFoundException("Course with id " + courseId + " not found.");
        }
    }
}
