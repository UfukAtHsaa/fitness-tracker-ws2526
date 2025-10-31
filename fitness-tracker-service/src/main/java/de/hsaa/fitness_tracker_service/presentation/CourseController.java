package de.hsaa.fitness_tracker_service.presentation;

import de.hsaa.fitness_tracker_service.service.Course;
import de.hsaa.fitness_tracker_service.service.CourseService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {

    private final CourseService courseService;

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses() {
        return ResponseEntity.ok(courseService.loadAllCourses());
    }

    @PutMapping("/{courseId}/users")
    public ResponseEntity<Void> addUserToCourse(@PathVariable Long courseId, @RequestBody AddUserRequest addUserRequest) {

        if (addUserRequest.getId() == null) {
            return ResponseEntity.badRequest().build();
        }

        courseService.addUserToCourse(courseId, addUserRequest.getId());

        return ResponseEntity.accepted().build();
    }
}
