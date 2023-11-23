package com.tuanpnt17.studentmanagement.model.dao;

import com.tuanpnt17.studentmanagement.model.dto.Student;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class StudentDAOImpl implements StudentDAO {

  private EntityManager entityManager;

  @Autowired
  public StudentDAOImpl(EntityManager entityManager) {
    this.entityManager = entityManager;
  }

  @Override
  public List<Student> getAll() {
    String query = "FROM Student";
    return entityManager.createQuery(query, Student.class)
            .getResultList();
  }

  @Override
  public Student getOneStudent(String id) {
    return entityManager.find(Student.class, id);
  }

  @Override
  @Transactional
  public Student createAStudent(Student student) {
    entityManager.persist(student);
    return student;
  }

  @Override
  @Transactional
  public Student updateStudent(Student updatedStudent) {
    return entityManager.merge(updatedStudent);
  }

  @Override
  @Transactional
  public Student removeStudent(String id) {
    Student removedStudent = this.getOneStudent(id);
    entityManager.remove(removedStudent);
    return removedStudent;
  }

}
