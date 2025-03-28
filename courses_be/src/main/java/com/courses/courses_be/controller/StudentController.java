package com.courses.courses_be.controller;

import com.courses.courses_be.dto.StudentDTO;
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
        List<StudentDTO> studentsList = studentService.getAllStudents();
        return ResponseEntity.status(HttpStatus.OK).body(studentsList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudentDTO> getStudent(@PathVariable(name = "id") Long id) {
        StudentDTO studentDTO = studentService.findStudentById(id);
        return ResponseEntity.status(HttpStatus.OK).body(studentDTO);
    }

    @PostMapping()
    public ResponseEntity<?> saveCourse(@RequestBody StudentDTO student) {
        studentService.saveStudent(student);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable(name = "id") Long id, @RequestBody StudentDTO studentDto) {
        studentService.updateStudent(id, studentDto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable(name = "id") Long id) {
        studentService.deleteStudent(id);
        return ResponseEntity.status(HttpStatus.OK).body("Student with ID " + id + " has been deleted successfully");
    }
}
