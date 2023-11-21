package com.tuanpnt17.studentmanagement.services;

import com.tuanpnt17.studentmanagement.model.dto.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MyService {
    List<Student> getStudentList();
}
