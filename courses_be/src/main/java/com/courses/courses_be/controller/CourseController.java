package com.courses.courses_be.controller;

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
    public ResponseEntity<List<CourseEntity>> getCourses() {
        List<CourseEntity> coursesList = courseService.getAllCourses();
        return ResponseEntity.status(HttpStatus.OK).body(coursesList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseEntity> getCourse(@PathVariable(name = "id") Long id) {
        CourseEntity courseEntity = courseService.findCourseById(id);
        return ResponseEntity.status(HttpStatus.OK).body(courseEntity);
    }

    @PostMapping()
    public ResponseEntity<CourseEntity> saveCourse(@RequestBody CourseEntity course) {
        CourseEntity courseEntity = courseService.saveCourse(course);
        return ResponseEntity.ok(courseEntity);
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
