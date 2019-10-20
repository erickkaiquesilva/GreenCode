package com.greencode.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.greencode.demo.domain.UsuariosRepository;
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
}
