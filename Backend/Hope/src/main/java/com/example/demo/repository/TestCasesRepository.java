package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.example.demo.entity.TestCases;

@Component
public interface TestCasesRepository extends JpaRepository<TestCases, Long> {

}
