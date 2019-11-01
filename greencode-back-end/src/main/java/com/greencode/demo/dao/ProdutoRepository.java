package com.greencode.demo.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.greencode.demo.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	
	@Query("select p from Produto p where p.nome = :nome")
	public List<Produto> porNome(@Param("nome") String nome);
	
	@Transactional
	@Modifying
	@Query("update Produto set preco = :preco where id = :id")
	public void atualizarPreco (@Param("preco") Double preco,@Param("id") Long id);
}
