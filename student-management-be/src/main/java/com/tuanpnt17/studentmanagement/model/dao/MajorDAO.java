package com.tuanpnt17.studentmanagement.model.dao;

import com.tuanpnt17.studentmanagement.model.dto.Major;
import org.springframework.stereotype.Repository;

@Repository
public interface MajorDAO {
  Major getOneMajor(int majorId);
}
