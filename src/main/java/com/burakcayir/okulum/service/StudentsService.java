package com.burakcayir.okulum.service;

import com.burakcayir.okulum.entity.Students;
import com.burakcayir.okulum.repository.StudentsRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public ResponseEntity<Students> findByIdStudent(String id) {
        Optional<Students> StudentsData = studentsRepository.findById(id);

        if (StudentsData.isPresent()) {
            return new ResponseEntity<>(StudentsData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Students> deleteByIdStudent(String id) {
            try {
                studentsRepository.deleteById(id);
                return new ResponseEntity<>(HttpStatus.FOUND);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
    }



}
