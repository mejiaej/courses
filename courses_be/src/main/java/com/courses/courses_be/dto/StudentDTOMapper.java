package com.courses.courses_be.dto;

import com.courses.courses_be.entity.StudentEntity;

import java.util.ArrayList;
import java.util.stream.Collectors;

public class StudentDTOMapper {
    public static StudentDTO fromEntity(StudentEntity studentEntity, boolean mapNested) {
        StudentDTO studentDTO = new StudentDTO();
        studentDTO.setId(studentEntity.getId());
        studentDTO.setName(studentEntity.getName());
        studentDTO.setLastName(studentEntity.getLastName());

        if (mapNested && studentEntity.getStudentCourses() != null && !studentEntity.getStudentCourses().isEmpty()) {
            studentDTO.setCourses(
                studentEntity.getStudentCourses().stream()
                    .map(sc -> CourseDTOMapper.fromEntity(sc.getCourse(), false))
                    .collect(Collectors.toList())
            );
        } else {
            studentDTO.setCourses(new ArrayList<>());
        }

        return studentDTO;
    }
}
