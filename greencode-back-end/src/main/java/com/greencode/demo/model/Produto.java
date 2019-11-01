package com.greencode.demo.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="TB_PRODUTO")
public class Produto {
	@Id
	@GeneratedValue
	private Long idProduto;
	
	@JsonProperty
	private double preco;
	
	@JsonProperty
	private String nome;
	
	@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            },
            mappedBy = "produtos")
    private Set<Transacao> transacao = new HashSet<>();

	public Produto(){
		
	}
	
	public Produto(Long idProduto, double preco, String nome, Set<Transacao> transacao) {
		this.idProduto = idProduto;
		this.preco = preco;
		this.nome = nome;
		this.transacao = transacao;
	}

	
	public Long getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(Long idProduto) {
		this.idProduto = idProduto;
	}

	public Set<Transacao> getTransacao() {
		return transacao;
	}

	public void setTransacao(Set<Transacao> transacao) {
		this.transacao = transacao;
	}
	
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

