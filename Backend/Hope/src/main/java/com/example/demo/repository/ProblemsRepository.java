package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.example.demo.entity.Problems;

@Component
public interface ProblemsRepository extends JpaRepository<Problems, Long> {
	
}
