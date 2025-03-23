package com.courses.courses_be.dto;

import com.courses.courses_be.entity.StudentEntity;

import java.util.stream.Collectors;

public class StudentDtoMapper {
    public static StudentDTO fromEntity(StudentEntity studentEntity, boolean mapNested) {
        StudentDTO studentDTO = new StudentDTO();
        studentDTO.setId(studentEntity.getId());
        studentDTO.setName(studentEntity.getName());
        studentDTO.setLastName(studentEntity.getLastName());

        if (mapNested && studentEntity.getStudentCourses() != null && !studentEntity.getStudentCourses().isEmpty()) {
            studentDTO.setCourses(
                studentEntity.getStudentCourses().stream()
                    .map(sc -> CourseDtoMapper.fromEntity(sc.getCourse(), false))
                    .collect(Collectors.toList())
            );
        }

        return studentDTO;
    }
}
