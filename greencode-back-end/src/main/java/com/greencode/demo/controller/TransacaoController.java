package com.greencode.demo.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.greencode.demo.dao.TransacaoRepository;
import com.greencode.demo.model.Produto;
import com.greencode.demo.model.Transacao;
import com.greencode.demo.model.Usuario;

@RestController
public class TransacaoController {
	
private TransacaoRepository transacoes;
	
	@Autowired
	public TransacaoController(TransacaoRepository transacaoRepo) {
		transacoes = transacaoRepo;
	}
	
	@PostMapping("/transacoes")
	public ResponseEntity<List<Object>> buscarPorUsuario(@RequestBody Usuario usuario){
		
		if(usuario != null) {
			List<Object> lista = transacoes.buscarPorUsuario(usuario.getId());
			
			return ResponseEntity.ok(lista);
			
		}else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}
}
