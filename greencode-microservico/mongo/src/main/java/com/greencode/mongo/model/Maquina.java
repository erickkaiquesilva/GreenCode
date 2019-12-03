package com.greencode.mongo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "colMaquina")
public class Maquina {
	
	@Id
	private String id;

	private String local;
	
	private String status;

	public Maquina() {
		super();
	}

	public Maquina(String id, String local,String status) {
		this.id = id;
		this.status = status;
		this.local = local;
		
	}
	public String getId() {
		return id;
	}
	public String getStatus() {
		return status;
	}
	public String getLocal() {
		return local;
	}

}
