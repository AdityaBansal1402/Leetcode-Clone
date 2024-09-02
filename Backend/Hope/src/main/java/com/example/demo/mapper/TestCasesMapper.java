package com.example.demo.mapper;

import com.example.demo.dto.TestCasesDto;
import com.example.demo.entity.TestCases;

public class TestCasesMapper {
	
	public static TestCasesDto maptoTestCasesDto(TestCases testCases) {
		return new TestCasesDto(
				testCases.getId(),
				testCases.getInputDataObject(),
				testCases.getOutputDataObject(),
				testCases.getProblem()
		);
	}
	public static TestCases maptoTestCases(TestCasesDto testCasesDto) {
		return new TestCases(
				testCasesDto.getId(),
				testCasesDto.getInputDataObject(),
				testCasesDto.getOutputDataObject(),
				testCasesDto.getProblemId()
		);
	}
}
