package com.greencode.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.greencode.demo.model.Reciclados;

public interface RecicladoRepository extends JpaRepository<Reciclados, Long> {
	
	//@Query("select r from r where r.id := id")
	public Reciclados findById(Long id);
}
