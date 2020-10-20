package com.burakcayir.okulum.service;

import com.burakcayir.okulum.entity.Students;
import com.burakcayir.okulum.repository.StudentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentsService {

    @Autowired
    private StudentsRepository studentsRepository;

    public void saveStudent(Students students) {
        studentsRepository.save(students);
    }

    public List<Students> findAllStudents() {
        return studentsRepository.findAll();
    }
}
