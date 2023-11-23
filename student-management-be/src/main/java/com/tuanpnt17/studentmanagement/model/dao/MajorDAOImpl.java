package com.tuanpnt17.studentmanagement.model.dao;

import com.tuanpnt17.studentmanagement.model.dto.Major;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class MajorDAOImpl implements MajorDAO{

  private EntityManager entityManager;

  @Autowired
  public MajorDAOImpl(EntityManager entityManager) {
    this.entityManager = entityManager;
  }

  @Override
  @Transactional
  public Major getOneMajor(int majorId) {
    return entityManager.find(Major.class, majorId);
  }

  @Override
  @Transactional
  public List<Major> getAll() {
    return entityManager.createQuery("FROM Major", Major.class).getResultList();
  }

  @Override
  public List<String> getAllMajorNames() {
    String sql = "SELECT M.majorName FROM Major M";
    return entityManager.createQuery(sql, String.class).getResultList();
  }


}
