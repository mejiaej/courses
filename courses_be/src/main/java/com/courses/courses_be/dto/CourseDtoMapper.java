package com.courses.courses_be.dto;

import com.courses.courses_be.entity.CourseEntity;

import java.util.stream.Collectors;

public class CourseDtoMapper {
    public static CourseDTO fromEntity(CourseEntity courseEntity, boolean mapNested) {
        CourseDTO courseDTO = new CourseDTO();
        courseDTO.setId(courseEntity.getId());
        courseDTO.setTitle(courseEntity.getTitle());
        courseDTO.setDescription(courseEntity.getDescription());

        if (mapNested && courseEntity.getStudentCourses() != null && !courseEntity.getStudentCourses().isEmpty()) {
            courseDTO.setStudents(
                courseEntity.getStudentCourses().stream()
                    .map(sc -> StudentDtoMapper.fromEntity(sc.getStudent(), false))
                    .collect(Collectors.toList())
            );
        }

        return courseDTO;
    }
}
