package com.greencode.demo.controller;

import javax.servlet.http.HttpSession;

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
	
	@PostMapping("/usuario/gastar")
	public ResponseEntity<Boolean> gastar(@RequestBody Produto produto, HttpSession session){
		Usuario usuario = (Usuario) session.getAttribute("usuarioLogado");
		if(usuario != null) {
			Long usuarioId = usuario.getId();
			int pontosAtuais = tds.buscarPontosPorId(usuarioId);
			int pontosAtualizados;
			
			if(pontosAtuais > produto.getPreco()) {
				pontosAtualizados = (int) pontosAtuais - (int) produto.getPreco();
				
				tds.atualizarPontos(pontosAtualizados, usuarioId);
				return ResponseEntity.ok(true);
			}
			else {
				return ResponseEntity.ok(false);
			}
		}else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		
		
		
		
		
		
		
	}
}
