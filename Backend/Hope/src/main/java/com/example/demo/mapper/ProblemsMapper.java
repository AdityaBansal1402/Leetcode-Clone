package com.example.demo.mapper;

import com.example.demo.dto.ProblemsDto;
import com.example.demo.entity.Problems;

public class ProblemsMapper {
	
	public static ProblemsDto maptoProblemsDto(Problems problems) {
		return new ProblemsDto(
			problems.getId(),
			problems.getTitle(),
			problems.getDescription()
		);
	}
	public static Problems maptoProblems(ProblemsDto problemsDto) {
		return new Problems(
				problemsDto.getId(),
				problemsDto.getTitle(),
				problemsDto.getDescription()
		);
	}

}
