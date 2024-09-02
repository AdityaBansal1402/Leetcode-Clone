package com.example.demo.dto;

import com.example.demo.entity.Problems;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TestCasesDto {

    public TestCasesDto(Long id, Object inputDataObject, Object outputDataObject, Problems problemId) {
		super();
		this.id = id;
		this.inputDataObject = inputDataObject;
		this.outputDataObject = outputDataObject;
		this.problemId = problemId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Object getInputDataObject() {
		return inputDataObject;
	}

	public void setInputDataObject(Object inputDataObject) {
		this.inputDataObject = inputDataObject;
	}

	public Object getOutputDataObject() {
		return outputDataObject;
	}

	public void setOutputDataObject(Object outputDataObject) {
		this.outputDataObject = outputDataObject;
	}

	public Problems getProblemId() {
		return problemId;
	}

	public void setProblemId(Problems problemId) {
		this.problemId = problemId;
	}

	private Long id;

    private Object inputDataObject;
    
    private Object outputDataObject;

    private Problems problemId;
}
