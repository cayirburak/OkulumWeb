package com.burakcayir.okulum.api;

import com.burakcayir.okulum.entity.Students;
import com.burakcayir.okulum.service.StudentsService;
import com.burakcayir.okulum.repository.StudentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/students")
public class StudentsApi {

    @Autowired
    private StudentsService studentService;

    @Autowired
    private StudentsRepository studentsRepository;

    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public ResponseEntity<String> postStudent(@RequestBody Students students) {
        studentService.saveStudent(students);
        return new ResponseEntity<>("Kayıt İşlemi Başarılı!", HttpStatus.OK);
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Students>> allStudents() {
        List<Students> students = studentService.findAllStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping("/Students/{id}")
    public ResponseEntity<Students> getStudentsById(@PathVariable("id") String id) {

        ResponseEntity<Students> StudentsData = studentService.findByIdStudent(id);

        if (StudentsData.hasBody()) {
            return new ResponseEntity(StudentsData.getBody(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/Studentdelete/{id}")
    public ResponseEntity<Students> deleteStudent(@PathVariable("id") String id) {
        ResponseEntity<Students> StudentsData = studentService.findByIdStudent(id);

            if (StudentsData.hasBody()) {
                studentService.deleteByIdStudent(id);
                return new ResponseEntity(StudentsData.getBody(), HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

    }

}
