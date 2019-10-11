package com.greencode.demo.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Produto {
	@Id
	@GeneratedValue
	private Long idProduto;
	
	@JsonProperty
	private double preco;
	
	@JsonProperty
	private String nome;

	public Long getId() {
		return idProduto;
	}

	public void setId(Long idProduto) {
		this.idProduto = idProduto;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}

