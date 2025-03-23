package com.courses.courses_be.service.impl;

import com.courses.courses_be.dto.StudentDTO;
import com.courses.courses_be.dto.StudentDtoMapper;
import com.courses.courses_be.entity.CourseEntity;
import com.courses.courses_be.entity.StudentCourseEntity;
import com.courses.courses_be.entity.StudentEntity;
import com.courses.courses_be.repository.StudentCourseRepository;
import com.courses.courses_be.repository.StudentRepository;
import com.courses.courses_be.service.StudentService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private StudentCourseRepository studentCourseRepository;


    @Override
    public List<StudentDTO> getAllStudents() {
        List<StudentEntity> students = studentRepository.findAll();
        return students.stream()
            .map(student -> StudentDtoMapper.fromEntity(student, false))
            .collect(Collectors.toList());
    }

    @Override
    public StudentDTO findStudentById(Long studentId) {
        StudentEntity studentEntity = studentRepository.findStudentWithCoursesById(studentId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found : id " + studentId));
        return StudentDtoMapper.fromEntity(studentEntity, true);
    }

    @Override
    @Transactional
    public void saveStudent(StudentDTO studentDTO) {
        StudentEntity studentEntity = new StudentEntity(studentDTO.getId(), studentDTO.getName(), studentDTO.getLastName(), null);
        studentRepository.save(studentEntity);
        List<StudentCourseEntity> studentCourseEntities = studentDTO.getCourses().stream().map(courseDTO -> {
            StudentCourseEntity newStudentCourseEntity = new StudentCourseEntity();
            newStudentCourseEntity.setCourse(new CourseEntity(courseDTO.getId(), null, null, null));
            newStudentCourseEntity.setStudent(studentEntity);
            return newStudentCourseEntity;
        }).toList();
        studentCourseRepository.saveAll(studentCourseEntities);
    }

    @Override
    @Transactional
    public StudentEntity updateStudent(Long studentId, StudentEntity updatedStudent) {
        StudentEntity studentEntity = studentRepository.findById(studentId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found : id " + studentId));
        studentEntity.setLastName(updatedStudent.getLastName());
        studentEntity.setName(updatedStudent.getName());

        return studentRepository.save(studentEntity);
    }

    @Override
    @Transactional
    public void deleteStudent(Long studentId) {
        StudentEntity studentEntity = studentRepository.findById(studentId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found : id " + studentId));

        List<StudentCourseEntity> studentCourseList = studentEntity.getStudentCourses();

        if (!studentCourseList.isEmpty()) {
            studentCourseRepository.deleteAll(studentCourseList);
        }

        studentRepository.delete(studentEntity);
    }
}
