package com.courses.courses_be.service.impl;

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

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private StudentCourseRepository studentCourseRepository;


    @Override
    public List<StudentEntity> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public StudentEntity findStudentById(Long studentId) {
        return studentRepository.findStudentWithCoursesById(studentId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found : id " + studentId));
    }

    @Override
    @Transactional
    public StudentEntity saveStudent(StudentEntity student) {
        return studentRepository.save(student);
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
