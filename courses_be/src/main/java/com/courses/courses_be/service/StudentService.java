package com.courses.courses_be.service;

import com.courses.courses_be.dto.StudentDTO;
import com.courses.courses_be.entity.StudentEntity;

import java.util.List;

public interface StudentService {
    List<StudentDTO> getAllStudents();

    StudentDTO findStudentById(Long studentId);

    void saveStudent(StudentDTO student);

    void updateStudent(Long studentId, StudentDTO studentDTO);

    void deleteStudent(Long studentId);
}
