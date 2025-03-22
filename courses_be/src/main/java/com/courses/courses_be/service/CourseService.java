package com.courses.courses_be.service;

import com.courses.courses_be.entity.CourseEntity;

import java.util.List;

public interface CourseService {
    List<CourseEntity> getAllCourses();

    CourseEntity findCourseById(Long courseId);

    CourseEntity saveCourse(CourseEntity course);

    CourseEntity updateCourse(Long courseId, CourseEntity course);

    void deleteCourse(Long courseId);
}