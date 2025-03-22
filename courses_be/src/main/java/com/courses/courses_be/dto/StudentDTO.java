package com.courses.courses_be.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class StudentDTO {
    private Long id;
    private String name;
    private String lastName;
    private List<CourseDTO> courses;
}