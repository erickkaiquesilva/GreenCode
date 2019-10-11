package com.greencode.demo.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.greencode.demo.accesslist.AccessList;
import com.greencode.demo.domain.TodosUsuarios;
import com.greencode.demo.domain.Usuario;

@RestController
public class LoginController {
	
	private TodosUsuarios tdUsuario;
	AccessList<String> lista = new AccessList<String>(50);
 	
	@Autowired
	public LoginController(TodosUsuarios usuarios) {
		tdUsuario = usuarios;
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<Usuario> validarLogin(@RequestBody Usuario usuario) {
		Usuario usuarioLogado = tdUsuario.logar(usuario.getEmail(), usuario.getSenha());
		
		//String senha = usuarioLogado.getSenha();
		//String email = usuarioLogado.getEmail();
		
		if(usuarioLogado != null) {
			lista.adiciona(usuario.getEmail());
			return ResponseEntity.ok(usuarioLogado);			
		}
	
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
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
