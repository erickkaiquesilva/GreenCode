package com.greencode.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "TB_RECICLAVEL")
public class Reciclavel {
	@Id
	@GeneratedValue
	private Long id;

	@JsonProperty
	private String tipo;

	@JsonProperty
	private int peso;

	@JsonProperty
	private int pontos;

	@JsonProperty
	private int idTipo;

	public Reciclavel() {
		super();
	}

	public Reciclavel(Long id, String tipo, int peso, int pontos, int idTipo) {
		this.id = id;
		this.tipo = tipo;
		this.peso = peso;
		this.pontos = pontos;
		this.idTipo = idTipo;
	}
	public Long getId() {
		return id;
	}
	public String getTipo() {
		return tipo;
	}
	public int getPeso() {
		return peso;
	}
	public int getPontos() {
		return pontos;
	}
	public int getIdTipo() {
		return idTipo;
	}
}
