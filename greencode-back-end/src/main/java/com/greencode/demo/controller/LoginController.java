package com.greencode.demo.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
	
	@PostMapping("/login")
	public ResponseEntity<String> validarLogin(@RequestBody Usuario usuario) {
		boolean usuarioValido = usuario.getEmail().equals("admin"); //mudar quando tiver classe do banco
		boolean senhaValida = usuario.getSenha().equals("admin"); //mudar quando tiver classe do banco
		
		if(usuarioValido && senhaValida) {
			return ResponseEntity.ok("Sucesso");
		}
		
		
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Erro");
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
