package com.edudeveloper.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edudeveloper.backend.entities.Sale;
import com.edudeveloper.backend.repositories.SaleRepository;

@Service
public class SalesService {
	
	@Autowired
	private SaleRepository repository;
	public List<Sale> findSales() {
		return repository.findAll();
	}
}
