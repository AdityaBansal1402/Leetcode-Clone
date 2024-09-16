package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

//import org.hibernate.bytecode.internal.bytebuddy.PrivateAccessorException;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Problems")
public class Problems {
	public Problems(){
		   super();
	}
	public Long getDiffiLong() {
		return diffiLong;
	}
	public void setDiffiLong(Long diffiLong) {
		this.diffiLong = diffiLong;
	}
	public Problems(Long id, String title, String description, Long diffiLong, List<TestCases> testCases) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.diffiLong = diffiLong;
		this.testCases = testCases;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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
	@Column(name="title")
	private String title;
	@Column(name = "description")
	private String description;
	@Column(name="diff")
	private Long diffiLong;
	
	public List<TestCases> getTestCases() {
		return testCases;
	}
	public void setTestCases(List<TestCases> testCases) {
		this.testCases = testCases;
	}
	@OneToMany(mappedBy = "problemId")
	private List<TestCases>testCases=new ArrayList<TestCases>();
	
}
