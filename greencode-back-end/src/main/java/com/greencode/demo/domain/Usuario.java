package com.greencode.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "TB_USUARIO")
public class Usuario {
	@Id
	@GeneratedValue
	private Long id;
	
	@JsonProperty
	private String nome;
	
	@JsonProperty
	private String senha;
	
	@JsonProperty
	private String email;
	
	@JsonProperty
	private String cpf;
	
	
	public Usuario() {
		super();
	}
	
	public Usuario(String senha, String email) {
		this.senha = senha;
		this.email = email;
	}
	public Usuario(Long id, String nome, String senha, String email, String cpf) {
		this.id = id;
		this.nome = nome;
		this.senha = senha;
		this.email = email;
		this.cpf = cpf;
	}
	public Long getId() {
		return id;
	}
	public String getNome() {
		return nome;
	}
	public String getSenha() {
		return senha;
	}
	public String getEmail() {
		return email;
	}
	public String getCpf() {
		return cpf;
	}
	
	
	
}

