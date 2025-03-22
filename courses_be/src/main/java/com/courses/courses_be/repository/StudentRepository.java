package com.courses.courses_be.repository;

import com.courses.courses_be.entity.StudentEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<StudentEntity, Long> {
    @EntityGraph(attributePaths = {"studentCourses", "studentCourses.course"})
    Optional<StudentEntity> findStudentWithCoursesById(Long studentId);
}
