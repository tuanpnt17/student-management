package com.tuanpnt17.studentmanagement.controller;

import com.tuanpnt17.studentmanagement.model.dto.Student;
import com.tuanpnt17.studentmanagement.services.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    private MyService myService;

    @Autowired
    public StudentController(MyService myService) {
        this.myService = myService;
    }

    @GetMapping("")
    public List<Student> getAllStudent() {
        return myService.getStudentList();
    }
}
