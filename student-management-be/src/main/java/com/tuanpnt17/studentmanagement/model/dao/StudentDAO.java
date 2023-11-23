package com.tuanpnt17.studentmanagement.model.dao;

import com.tuanpnt17.studentmanagement.model.dto.Student;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentDAO {
  List<Student> getAll();

  Student getOneStudent(String id);

  Student createAStudent(Student student);

  Student updateStudent(Student updatedStudent);

  Student removeStudent(String id);
}
