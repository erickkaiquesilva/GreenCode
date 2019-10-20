package com.greencode.demo.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuariosRepository extends JpaRepository<Usuario, Long> {
	
	@Query("select u from Usuario u where u.email = :email and u.senha = :senha")
	public Usuario logar(@Param("email") String email,@Param("senha") String senha);
	
	@Query("select u from Usuario u where u.email = :email")
	public Usuario buscarEmail(@Param("email") String email);
	
}