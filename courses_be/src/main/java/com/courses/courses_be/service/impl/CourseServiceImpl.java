package com.courses.courses_be.service.impl;

import com.courses.courses_be.entity.CourseEntity;
import com.courses.courses_be.repository.CourseRepository;
import com.courses.courses_be.service.CourseService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<CourseEntity> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public CourseEntity findCourseById(Long courseId) {
        return courseRepository.findById(courseId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found : id " + courseId));
    }

    @Override
    public CourseEntity saveCourse(CourseEntity course) {
        return courseRepository.save(course);
    }

    @Override
    @Transactional
    public CourseEntity updateCourse(Long courseId, CourseEntity course) {
        CourseEntity courseEntity = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found : id " + courseId));

        courseEntity.setTitle(course.getTitle());
        courseEntity.setDescription(course.getDescription());

        return courseRepository.save(courseEntity);
    }

    @Override
    @Transactional
    public void deleteCourse(Long courseId) {
        if (!courseRepository.existsById(courseId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found : id " + courseId);
        }

        courseRepository.deleteById(courseId);
    }
}
