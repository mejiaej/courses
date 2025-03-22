package com.courses.courses_be.controller;

import com.courses.courses_be.entity.StudentEntity;
import com.courses.courses_be.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/student")
@CrossOrigin("*")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping
    public ResponseEntity<?> getStudents() {
        List<StudentEntity> studentsList = studentService.getAllStudents();
        return ResponseEntity.status(HttpStatus.OK).body(studentsList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getStudent(@PathVariable(name = "id") Long id) {
        StudentEntity studentEntity = studentService.findStudentById(id);
        return ResponseEntity.status(HttpStatus.OK).body(studentEntity);
    }

    @PostMapping()
    public ResponseEntity<?> saveCourse(@RequestBody StudentEntity student) {
        StudentEntity studentEntity = studentService.saveStudent(student);
        return ResponseEntity.ok(studentEntity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable(name = "id") Long id, @RequestBody StudentEntity student) {
        StudentEntity studentEntity = studentService.updateStudent(id, student);
        return ResponseEntity.ok(studentEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable(name = "id") Long id) {
        studentService.deleteStudent(id);
        return ResponseEntity.status(HttpStatus.OK).body("Student with ID " + id + " has been deleted successfully");
    }
}
