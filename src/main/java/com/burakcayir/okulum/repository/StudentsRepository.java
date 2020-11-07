package com.burakcayir.okulum.repository;

import com.burakcayir.okulum.entity.Students;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentsRepository extends MongoRepository<Students,String> {
}


