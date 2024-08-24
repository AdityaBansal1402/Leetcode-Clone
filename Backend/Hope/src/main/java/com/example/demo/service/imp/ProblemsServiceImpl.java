package com.example.demo.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ProblemsDto;
import com.example.demo.entity.Problems;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.ProblemsMapper;
import com.example.demo.repository.ProblemsRepository;
import com.example.demo.service.ProblemsService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProblemsServiceImpl implements ProblemsService {
	
	@Autowired
	private ProblemsRepository problemsRepository;

	@Override
	public ProblemsDto createProblems(ProblemsDto problemsDto) {
		
		Problems problems=ProblemsMapper.maptoProblems(problemsDto);
		Problems savedProblems = problemsRepository.save(problems);
		
		return ProblemsMapper.maptoProblemsDto(savedProblems);
	}

	@Override
	public ProblemsDto getProblemById(long problemId) {
		Problems problems = problemsRepository.findById(problemId)
				.orElseThrow(()->
						new ResourceNotFoundException("Problem doesnotexist"));
		
		return ProblemsMapper.maptoProblemsDto(problems);
	}

}
