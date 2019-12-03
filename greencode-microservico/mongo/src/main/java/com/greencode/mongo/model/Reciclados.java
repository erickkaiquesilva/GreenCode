package com.greencode.mongo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "colReciclados")
public class Reciclados {

	@Id
	private String id;
	
	private Maquina maquina;
	
	private Reciclavel reciclavel;
	
	private int idUsuario;
	
	private String nomeUsuario;


	public Reciclados() {
		
	}
	
	public Reciclados(String id, Maquina maquina, Reciclavel reciclavel, int idUsuario, String nomeUsuario) {
		this.id = id;
		this.maquina = maquina;
		this.reciclavel = reciclavel;
		this.idUsuario = idUsuario;
		this.nomeUsuario = nomeUsuario;
	}

	public String getId() {
		return id;
	}

	public Maquina getMaquina() {
		return maquina;
	}

	public Reciclavel getReciclavel() {
		return reciclavel;
	}
	
	public int getIdUsuario() {
		return idUsuario;
	}
	
	public String getnomeUsuario() {
		return nomeUsuario;
	}
	
	
}
