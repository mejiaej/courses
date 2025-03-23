package com.courses.courses_be.service.impl;

import com.courses.courses_be.dto.CourseDTO;
import com.courses.courses_be.dto.CourseDTOMapper;
import com.courses.courses_be.dto.StudentCoursesDTOMapper;
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
                .map(course -> CourseDTOMapper.fromEntity(course, false))
                .collect(Collectors.toList());
    }

    @Override
    public CourseDTO findCourseById(Long courseId) {
        CourseEntity courseEntity = courseRepository.findCoursetWithStudentsById(courseId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found : id " + courseId));
        return CourseDTOMapper.fromEntity(courseEntity, true);
    }

    @Override
    public void saveCourse(CourseDTO courseDTO) {
        CourseEntity courseEntity = new CourseEntity(null, courseDTO.getTitle(), courseDTO.getDescription(), null);
        courseRepository.save(courseEntity);
        studentCourseRepository.saveAll(StudentCoursesDTOMapper.fromDTO(courseDTO, courseEntity));
    }

    @Override
    @Transactional
    public void updateCourse(Long courseId, CourseDTO courseDTO) {
        CourseEntity courseEntity = courseRepository.findCoursetWithStudentsById(courseId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found : id " + courseId));
        courseEntity.setTitle(courseDTO.getTitle());
        courseEntity.setDescription(courseDTO.getDescription());
        courseRepository.save(courseEntity);

        studentCourseRepository.deleteAll(courseEntity.getStudentCourses());
        studentCourseRepository.saveAll(StudentCoursesDTOMapper.fromDTO(courseDTO, courseEntity));
    }

    @Override
    @Transactional
    public void deleteCourse(Long courseId) {
        CourseEntity courseEntity = courseRepository.findCoursetWithStudentsById(courseId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found : id " + courseId));

        studentCourseRepository.deleteAll(courseEntity.getStudentCourses());
        courseRepository.delete(courseEntity);
    }
}
