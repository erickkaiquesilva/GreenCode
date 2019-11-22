package com.greencode.maquina.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.greencode.maquina.model.Usuario;

@Service
public class Services {

	private final RestTemplate restTemplate;
	private final String url;
	
	
	public Services() {
		restTemplate = new RestTemplate();
		url = "http://3.211.16.250";
	}
	
	public Usuario login(Usuario user) {
		String urlLogin = url + "/login";
		ResponseEntity<Usuario> resposta = restTemplate.postForEntity(urlLogin, user, Usuario.class);
		return resposta.getBody();
	}
	
	public boolean atualizarPontos(Usuario user, int pontos) {
		String urlAtualizar = url + "/usuario/atualizarPontos/" + pontos;
		ResponseEntity<Boolean> resposta = restTemplate.postForEntity(urlAtualizar, user, Boolean.class);
		return resposta.getBody();
	}
}
