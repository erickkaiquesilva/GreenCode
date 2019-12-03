package com.greencode.mongo.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "colReciclavel")
public class Reciclavel {
	
	@Id
	private Long id;

	private int peso;

	private int pontos;

	private String idTipo;
	
	public Reciclavel() {}

	public Reciclavel(Long id, int peso, int pontos, String idTipo) {
		this.id = id;
		this.peso = peso;
		this.pontos = pontos;
		this.idTipo = idTipo;
	}
	public Long getId() {
		return id;
	}

	public int getPeso() {
		return peso;
	}
	public int getPontos() {
		return pontos;
	}
	public String getIdTipo() {
		return idTipo;
	}
}
