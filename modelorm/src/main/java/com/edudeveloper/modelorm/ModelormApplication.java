package com.edudeveloper.modelorm;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.edudeveloper.modelorm.entities.Department;
import com.edudeveloper.modelorm.entities.Employee;

@SpringBootApplication
public class ModelormApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(ModelormApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Department d1 = new Department(1L, "Vendas");
		Department d2 = new Department(2L, "Marketing");
		
		Employee e1 = new Employee(1L, "Suellen", 6000.00, d1);
		
		System.out.println(d1);		
		System.out.println(e1);	
	}
}
