package com.greencode.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.greencode.demo.domain.UsuariosRepository;
import com.greencode.demo.domain.Produto;
import com.greencode.demo.domain.Usuario;

@RestController
public class UsuarioController {

	private UsuariosRepository tds;
	
	@Autowired
	public UsuarioController(UsuariosRepository todos) {
		tds = todos;
	}
	
	@PostMapping("/signup")
	public ResponseEntity<Boolean> cadastrarUsuario(@RequestBody Usuario usuario){
		
		if(tds.buscarEmail(usuario.getEmail()) != null) {
			return ResponseEntity.ok(false);
		}
		
		tds.save(usuario);
		return ResponseEntity.ok(true);
	}
	
	@PostMapping("/usuario/gastar/{id}")
	public ResponseEntity<Integer> gastar(@RequestBody Produto produto, @PathVariable String id){
		Long usuarioId = Long.parseLong(id);
		int pontosAtuais = tds.buscarPontosPorId(usuarioId);
		int pontosAtualizados;
		
		if(pontosAtuais > produto.getPreco()) {
			pontosAtualizados = (int) pontosAtuais - (int) produto.getPreco();
			
			tds.atualizarPontos(pontosAtualizados, usuarioId);
			return ResponseEntity.ok(pontosAtualizados);
		}
		else {
			return ResponseEntity.ok(pontosAtuais);
		}
		
		
		
		
	}
}
