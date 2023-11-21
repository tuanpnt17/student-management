package com.tuanpnt17.studentmanagement.services;

import com.tuanpnt17.studentmanagement.model.dao.StudentDAO;
import com.tuanpnt17.studentmanagement.model.dto.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MyServiceImpl implements MyService{

    private StudentDAO studentDAO;

    @Autowired
    public MyServiceImpl(StudentDAO studentDAO) {
        this.studentDAO = studentDAO;
    }

    @Override
    public List<Student> getStudentList() {
        return studentDAO.getAll();
    }
}
