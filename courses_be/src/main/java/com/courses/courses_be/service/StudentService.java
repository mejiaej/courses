package com.courses.courses_be.service;

import com.courses.courses_be.dto.StudentDTO;
import com.courses.courses_be.entity.StudentEntity;

import java.util.List;

public interface StudentService {
    List<StudentEntity> getAllStudents();

    StudentDTO findStudentById(Long studentId);

    StudentEntity saveStudent(StudentEntity student);

    StudentEntity updateStudent(Long studentId, StudentEntity student);

    void deleteStudent(Long studentId);
}
