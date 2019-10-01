package com.greencode.demo.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository
public interface TodosUsuarios extends JpaRepository<Usuario, Long> {
	
	@Query("select u from Usuario u where u.email = :email and u.senha = :senha")
	public Usuario logar(@Param("email") String email,@Param("senha") String senha);
}