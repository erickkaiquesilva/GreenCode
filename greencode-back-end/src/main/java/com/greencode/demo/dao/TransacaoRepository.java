package com.greencode.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.greencode.demo.model.Transacao;
import com.greencode.demo.model.Usuario;

public interface TransacaoRepository extends JpaRepository<Transacao, Long>{
	
	@Query("select t from Transacao t where t.usuario = :usuario order by t.data_hora desc")
	public List<Transacao> buscarPorUsuario(@Param("usuario") Usuario usuario);
	
}
