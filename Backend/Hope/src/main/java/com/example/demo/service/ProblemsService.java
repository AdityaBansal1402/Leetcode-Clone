package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.dto.ProblemsDto;

@Component
public interface ProblemsService {
	ProblemsDto createProblems(ProblemsDto problemsDto);
	ProblemsDto getProblemById(long problemId);
	List<ProblemsDto> getAllProblems();
	ProblemsDto updateProblem(Long problemId, ProblemsDto problemsDto);
	void deleteProblem(Long problemId);
}
