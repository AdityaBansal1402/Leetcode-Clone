package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	
}
