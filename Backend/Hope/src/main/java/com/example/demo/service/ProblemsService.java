package com.example.demo.service;

import org.springframework.stereotype.Component;

import com.example.demo.dto.ProblemsDto;

@Component
public interface ProblemsService {
	ProblemsDto createProblems(ProblemsDto problemsDto);
	ProblemsDto getProblemById(long problemId);
}
