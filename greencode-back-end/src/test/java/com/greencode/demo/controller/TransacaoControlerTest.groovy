package com.greencode.demo.controller

import static org.junit.Assert.assertEquals

import org.mockito.Mockito
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity

import com.greencode.demo.dao.TransacaoRepository
import com.greencode.demo.model.Usuario

import spock.lang.Specification

class TransacaoControlerTest extends Specification {

	private TransacaoController controller;
	
	private TransacaoRepository tds;
	
	
	public void setup(){
		tds = Mockito.mock(TransacaoRepository.class);
		controller = new TransacaoController(tds);
	}
	
	def 'deve Buscar Transações'(){
		given:
			Long id = 1;
			Usuario usuario = new Usuario(id,"nome","senha","sobrenome","email","cpf");
			List<Object> transacoes = new ArrayList();
			Mockito.when(tds.buscarPorUsuario(id)).thenReturn(transacoes);
			TransacaoController controllerT = new TransacaoController(tds);
			
		when:
			ResponseEntity<List<Object>> resposta = controllerT.buscarPorUsuario(usuario);

		then:
			assertEquals(HttpStatus.OK, resposta.getStatusCode());
			assertEquals(transacoes, resposta.getBody());
	}

}
