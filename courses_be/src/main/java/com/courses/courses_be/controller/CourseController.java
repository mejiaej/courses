package com.courses.courses_be.controller;

import com.courses.courses_be.dto.CourseDTO;
import com.courses.courses_be.entity.CourseEntity;
import com.courses.courses_be.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/course")
@CrossOrigin("*")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public ResponseEntity<?> getCourses() {
        List<CourseDTO> coursesList = courseService.getAllCourses();
        return ResponseEntity.status(HttpStatus.OK).body(coursesList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseDTO> getCourse(@PathVariable(name = "id") Long id) {
        CourseDTO courseDTO = courseService.findCourseById(id);
        return ResponseEntity.status(HttpStatus.OK).body(courseDTO);
    }

    @PostMapping()
    public ResponseEntity<CourseEntity> saveCourse(@RequestBody CourseDTO course) {
        courseService.saveCourse(course);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseEntity> updateCourse(@PathVariable(name = "id") Long id, @RequestBody CourseEntity course) {
        CourseEntity courseEntity = courseService.updateCourse(id, course);
        return ResponseEntity.ok(courseEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable(name = "id") Long id) {
        courseService.deleteCourse(id);
        return ResponseEntity.status(HttpStatus.OK).body("Product with ID " + id + " has been deleted successfully");
    }
}
