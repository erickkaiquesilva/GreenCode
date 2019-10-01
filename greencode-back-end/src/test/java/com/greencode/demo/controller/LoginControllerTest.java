package com.greencode.demo.controller;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.greencode.demo.controller.LoginController;
import com.greencode.demo.domain.TodosUsuarios;
import com.greencode.demo.domain.Usuario;

public class LoginControllerTest {
	
private LoginController controller;
	
	private TodosUsuarios tds;

	@Before
	public void setUP() {
		tds = Mockito.mock(TodosUsuarios.class);
		controller = new LoginController(tds);
	}

	@Test
	public void loginSucesso() {
		Mockito.when(tds.logar("admin","admin")).thenReturn(new Usuario("admin","admin"));
		LoginController controller = new LoginController(tds);
		ResponseEntity<String> resposta = controller.validarLogin(new Usuario("admin","admin"));

		assertEquals(HttpStatus.OK, resposta.getStatusCode());
		assertEquals("Usuario Logado", resposta.getBody());
	}

	@Test
	public void loginComFalha() {

		LoginController controller = new LoginController(tds);

		ResponseEntity<String> resposta = controller.validarLogin(new Usuario("login", "senha"));

		assertEquals(HttpStatus.UNAUTHORIZED, resposta.getStatusCode());
		assertEquals("Usuario Não Cadastrado", resposta.getBody());

	}
	
	
	

}
