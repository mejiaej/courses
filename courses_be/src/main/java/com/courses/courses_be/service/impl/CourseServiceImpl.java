package com.courses.courses_be.service.impl;

import com.courses.courses_be.dto.CourseDTO;
import com.courses.courses_be.dto.CourseDtoMapper;
import com.courses.courses_be.dto.StudentDtoMapper;
import com.courses.courses_be.entity.CourseEntity;
import com.courses.courses_be.entity.StudentCourseEntity;
import com.courses.courses_be.entity.StudentEntity;
import com.courses.courses_be.repository.CourseRepository;
import com.courses.courses_be.repository.StudentCourseRepository;
import com.courses.courses_be.service.CourseService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private StudentCourseRepository studentCourseRepository;

    @Override
    public List<CourseDTO> getAllCourses() {
        List<CourseEntity> courseEntities = courseRepository.findAll();
        return courseEntities.stream()
                .map(course -> CourseDtoMapper.fromEntity(course, false))
                .collect(Collectors.toList());
    }

    @Override
    public CourseDTO findCourseById(Long courseId) {
        CourseEntity courseEntity = courseRepository.findCoursetWithStudentsById(courseId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found : id " + courseId));
        return CourseDtoMapper.fromEntity(courseEntity, true);
    }

    @Override
    public void saveCourse(CourseDTO courseDTO) {
        CourseEntity courseEntity = new CourseEntity(null, courseDTO.getTitle(), courseDTO.getDescription(), null);
        courseRepository.save(courseEntity);

        List<StudentCourseEntity> studentCourseEntities = courseDTO.getStudents().stream().map(student -> {
            StudentCourseEntity newStudentCourseEntity = new StudentCourseEntity();
            newStudentCourseEntity.setCourse(courseEntity);
            newStudentCourseEntity.setStudent(new StudentEntity(student.getId(), null, null, null));
            return newStudentCourseEntity;
        }).toList();
        studentCourseRepository.saveAll(studentCourseEntities);
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
