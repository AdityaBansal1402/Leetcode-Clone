package com.example.demo.entity;

//import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import com.vladmihalcea.hibernate.type.json.JsonType;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
//import org.hibernate.annotations.TypeDef;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "testcases")
//@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
public class TestCases {
    public TestCases(Long id, Object inputDataObject, Object outputDataObject, Problems problemId) {
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

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb", name = "input")
    private Object inputDataObject;
    
    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb", name = "output")
    private Object outputDataObject;

    @ManyToOne
    @JoinColumn(name = "problem_id")
    private Problems problemId;
}