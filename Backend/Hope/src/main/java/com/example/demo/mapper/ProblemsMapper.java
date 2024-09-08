package com.example.demo.mapper;

import java.util.stream.Collectors;

import com.example.demo.dto.ProblemsDto;
import com.example.demo.entity.Problems;

public class ProblemsMapper {
	
	public static ProblemsDto maptoProblemsDto(Problems problems) {
		return new ProblemsDto(
			problems.getId(),
			problems.getTitle(),
			problems.getDescription(),
			problems.getTestCases().stream().map(TestCasesMapper::maptoTestCasesDto).collect(Collectors.toList())
		);
	}
	public static Problems maptoProblems(ProblemsDto problemsDto) {
		return new Problems(
				problemsDto.getId(),
				problemsDto.getTitle(),
				problemsDto.getDescription(),
				problemsDto.getTestCasesDtos().stream().map(TestCasesMapper::maptoTestCases).collect(Collectors.toList())
		);
	}

}
