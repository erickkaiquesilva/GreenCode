package com.greencode.demo.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
	
	private TodosUsuarios tdUsuario;
	
	@Autowired
	public LoginController(TodosUsuarios usuarios) {
		tdUsuario = usuarios;
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> validarLogin(@RequestBody Usuario usuario) {
		Usuario usuarioLogado = tdUsuario.logar(usuario.getEmail(), usuario.getSenha());
		
		//String senha = usuarioLogado.getSenha();
		//String email = usuarioLogado.getEmail();
		
		if(usuarioLogado != null) {
			return ResponseEntity.ok("UsuarioLogado");
		}
	
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario Não Cadastrado");
	}
	
	@RequestMapping(value="/logout", method = RequestMethod.GET)
	public String logoutPage (HttpServletRequest request, HttpServletResponse response) {
		/*Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	    if (auth != null){    
	        new SecurityContextLogoutHandler().logout(request, response, auth);
	    }*/
	    return "redirect:/login?logout";
	}
	
	
}
