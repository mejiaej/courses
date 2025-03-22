package com.courses.courses_be.repository;

import com.courses.courses_be.entity.StudentCourseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentCourseRepository extends JpaRepository<StudentCourseEntity, Long> {
}

