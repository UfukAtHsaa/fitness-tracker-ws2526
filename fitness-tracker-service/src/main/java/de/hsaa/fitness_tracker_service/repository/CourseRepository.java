package de.hsaa.fitness_tracker_service.repository;

import de.hsaa.fitness_tracker_service.service.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
}
