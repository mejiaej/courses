package com.courses.courses_be.service.impl;

import com.courses.courses_be.entity.CourseEntity;
import com.courses.courses_be.entity.StudentCourseEntity;
import com.courses.courses_be.repository.CourseRepository;
import com.courses.courses_be.repository.StudentCourseRepository;
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

    @Autowired
    private StudentCourseRepository studentCourseRepository;

    @Override
    public List<CourseEntity> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public CourseEntity findCourseById(Long courseId) {
        return courseRepository.findById(courseId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found : id " + courseId));
    }

    @Override
    public CourseEntity saveCourse(CourseEntity course) {
        return courseRepository.save(course);
    }

    @Override
    @Transactional
    public CourseEntity updateCourse(Long courseId, CourseEntity updatedCourse) {
        CourseEntity courseEntity = courseRepository.findById(courseId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found : id " + courseId));

        courseEntity.setTitle(updatedCourse.getTitle());
        courseEntity.setDescription(updatedCourse.getDescription());

        return courseRepository.save(courseEntity);
    }

    @Override
    @Transactional
    public void deleteCourse(Long courseId) {
        CourseEntity courseEntity = courseRepository.findById(courseId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found : id " + courseId));

        List<StudentCourseEntity> studentCourseList = courseEntity.getStudentCourses();

        if (!studentCourseList.isEmpty()) {
            studentCourseRepository.deleteAll(studentCourseList);
        }

        courseRepository.delete(courseEntity);
    }
}
