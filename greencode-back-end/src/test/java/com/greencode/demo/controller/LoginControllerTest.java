package com.greencode.demo.controller;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.greencode.demo.controller.Usuario;
import com.greencode.demo.controller.LoginController;

public class LoginControllerTest {
	
private LoginController controller;
	
	@Before
	public void setUP() {
		controller = new LoginController();
	}

	@Test
	public void loginSucesso() {
		LoginController controller = new LoginController();
		ResponseEntity<String> resposta = controller.validarLogin(new Usuario("admin","admin"));

		assertEquals(HttpStatus.OK, resposta.getStatusCode());
		assertEquals("Sucesso", resposta.getBody());
	}

	@Test
	public void loginComFalha() {

		LoginController controller = new LoginController();

		ResponseEntity<String> resposta = controller.validarLogin(new Usuario("login", "senha"));

		assertEquals(HttpStatus.UNAUTHORIZED, resposta.getStatusCode());
		assertEquals("Erro", resposta.getBody());

	}
	
	
	

}
