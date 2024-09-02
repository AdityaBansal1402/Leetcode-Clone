package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TestCasesDto {

    private Long id;

    private Object inputDataObject;
    
    private Object outputDataObject;

    private Long problemId;
}
