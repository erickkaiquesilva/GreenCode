package com.greencode.demo.controller;

public class Usuario {
	
	private String id;
	private String nome;
	private String senha;
	private String email;
	private String cpf;
	
	
	public Usuario() {
		super();
	}
	
	public Usuario(String senha, String email) {
		this.senha = senha;
		this.email = email;
	}
	public Usuario(String id, String nome, String senha, String email, String cpf) {
		this.id = id;
		this.nome = nome;
		this.senha = senha;
		this.email = email;
		this.cpf = cpf;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	
	
}

