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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb", name = "input")
    private Object inputDataObject;
    
    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb", name = "input")
    private Object outputDataObject;

    @ManyToOne
    @JoinColumn(name = "problem_id")
    private Problems problem;
}