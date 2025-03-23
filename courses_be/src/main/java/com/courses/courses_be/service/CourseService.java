package com.courses.courses_be.service;

import com.courses.courses_be.dto.CourseDTO;
import com.courses.courses_be.entity.CourseEntity;

import java.util.List;

public interface CourseService {
    List<CourseDTO> getAllCourses();

    CourseDTO findCourseById(Long courseId);

    void saveCourse(CourseDTO course);

    CourseEntity updateCourse(Long courseId, CourseEntity course);

    void deleteCourse(Long courseId);
}