package com.courses.courses_be.dto;

import com.courses.courses_be.entity.CourseEntity;
import com.courses.courses_be.entity.StudentCourseEntity;
import com.courses.courses_be.entity.StudentEntity;

import java.util.List;

public class StudentCoursesDTOMapper {
    public static List<StudentCourseEntity> fromDTO (StudentDTO studentDTO, StudentEntity studentEntity) {
        return studentDTO.getCourses().stream().map(courseDTO -> {
            StudentCourseEntity newStudentCourseEntity = new StudentCourseEntity();
            newStudentCourseEntity.setCourse(new CourseEntity(courseDTO.getId(), null, null, null));
            newStudentCourseEntity.setStudent(studentEntity);
            return newStudentCourseEntity;
        }).toList();
    }

    public static List<StudentCourseEntity> fromDTO (CourseDTO courseDTO, CourseEntity courseEntity) {
        return courseDTO.getStudents().stream().map(student -> {
            StudentCourseEntity newStudentCourseEntity = new StudentCourseEntity();
            newStudentCourseEntity.setCourse(courseEntity);
            newStudentCourseEntity.setStudent(new StudentEntity(student.getId(), null, null, null));
            return newStudentCourseEntity;
        }).toList();
    }
}
