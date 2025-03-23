package com.courses.courses_be.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class CourseDTO {
    private Long id;
    private String title;
    private String code;
    private String description;
    private List<StudentDTO> students;
}