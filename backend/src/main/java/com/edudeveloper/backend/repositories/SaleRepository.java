package com.edudeveloper.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edudeveloper.backend.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
