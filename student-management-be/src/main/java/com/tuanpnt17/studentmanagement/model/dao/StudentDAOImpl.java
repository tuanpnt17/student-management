package com.tuanpnt17.studentmanagement.model.dao;

import com.tuanpnt17.studentmanagement.model.dto.Student;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class StudentDAOImpl implements StudentDAO{

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

}
