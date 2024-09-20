package com.example.demo.service.imp;

import java.util.List;import java.util.stream.Collector;
import java.util.stream.Collectors;

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

//	@Override
//	public ProblemsDto createProblems(ProblemsDto problemsDto) {
//		
//		Problems problems=ProblemsMapper.maptoProblems(problemsDto);
//		Problems savedProblems = problemsRepository.save(problems);
//		
//		return ProblemsMapper.maptoProblemsDto(savedProblems);
//	}
	 private TestCasesRepository testCasesRepository; // Add the repository for TestCases

	    @Override
	    public ProblemsDto createProblems(ProblemsDto problemsDto) {
	        Problems problems = ProblemsMapper.maptoProblems(problemsDto);
	        
	        // Create default test cases
	        List<TestCases> defaultTestCases = new ArrayList<>();
	        for (int i = 1; i <= 3; i++) {
	            TestCases testCase = new TestCases();
	            testCase.setInput("Default input " + i);
	            testCase.setExpectedOutput("Default output " + i);
	            testCase.setProblemId(problems); // Set the reference to the Problem
	            defaultTestCases.add(testCase);
	        }
	        
	        problems.setTestCases(defaultTestCases); // Associate test cases with the problem

	        Problems savedProblems = problemsRepository.save(problems);
	        
	        // Save the test cases to the database
	        for (TestCases testCase : defaultTestCases) {
	            testCasesRepository.save(testCase);
	        }

	        return ProblemsMapper.maptoProblemsDto(savedProblems);
	    }


	@Override
	public ProblemsDto getProblemById(long problemId) {
		Problems problems = problemsRepository.findById(problemId)
				.orElseThrow(()->
						new ResourceNotFoundException("Problem doesnotexist"));
		
		return ProblemsMapper.maptoProblemsDto(problems);
	}

	@Override
	public List<ProblemsDto> getAllProblems() {
		List<Problems> problems =problemsRepository.findAll();
		
		return problems.stream().map((problem)-> ProblemsMapper.maptoProblemsDto(problem)).collect((Collectors.toList()));
	}

	
	@Override
	public ProblemsDto updateProblem(Long problemId, ProblemsDto problemsDto) {
		Problems problems = problemsRepository.findById(problemId)
				.orElseThrow(()->
						new ResourceNotFoundException("Problem doesnotexist"));
		problems.setTitle(problemsDto.getTitle());
		problems.setDescription(problemsDto.getDescription());
		Problems updatedProblem = problemsRepository.save(problems);
		return ProblemsMapper.maptoProblemsDto(updatedProblem);
	}

	@Override
	public void deleteProblem(Long problemId) {
		Problems problems = problemsRepository.findById(problemId)
				.orElseThrow(()->
						new ResourceNotFoundException("Problem doesnotexist"));
		problemsRepository.deleteById(problemId);
	}

}
