package de.hsaa.fitness_tracker_service.service.exceptions;

public class CourseNotFoundException extends IllegalArgumentException {
    public CourseNotFoundException(String s) {
        super(s);
    }
}
