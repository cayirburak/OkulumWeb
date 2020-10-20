package com.burakcayir.okulum.api;

import com.burakcayir.okulum.entity.Students;
import com.burakcayir.okulum.service.StudentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/students")
public class StudentsApi {

    @Autowired
    private StudentsService studentService;

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
}
