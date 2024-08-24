package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ProblemsDto;
import com.example.demo.service.ProblemsService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/problems")
@AllArgsConstructor
public class ProblemsController {
	
	@Autowired
	private ProblemsService problemsService;
	
	@PostMapping
	public ResponseEntity<ProblemsDto> createProblems(@RequestBody ProblemsDto problemsDto){
		ProblemsDto savedProblems = problemsService.createProblems(problemsDto);
		return new ResponseEntity<>(savedProblems,HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<ProblemsDto> getProblemById(@PathVariable("id") Long problemId){
		ProblemsDto problemsDto = problemsService.getProblemById(problemId);
		return ResponseEntity.ok(problemsDto);
	}
	
	@GetMapping
	public ResponseEntity<List<ProblemsDto>> getAllProblems(){
		List<ProblemsDto> problemsDto = problemsService.getAllProblems();
		return ResponseEntity.ok(problemsDto);
	}
	
}
