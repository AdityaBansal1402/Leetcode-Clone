package com.example.demo.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class ProblemsDto {
	public ProblemsDto(){
		   super();
	}
	public ProblemsDto(Long id, String title, String description, List<TestCasesDto> testCasesDtos) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.testCasesDtos = testCasesDtos;
	}

	private Long id;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	private String title;
	private String description;
	private List<TestCasesDto> testCasesDtos;
	public List<TestCasesDto> getTestCasesDtos() {
		return testCasesDtos;
	}
	public void setTestCasesDtos(List<TestCasesDto> testCasesDtos) {
		this.testCasesDtos = testCasesDtos;
	}
	
}
