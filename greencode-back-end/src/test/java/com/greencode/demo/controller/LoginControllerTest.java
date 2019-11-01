package com.greencode.demo.controller;

import static org.junit.Assert.assertEquals;

import java.util.Enumeration;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionContext;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.greencode.demo.controller.LoginController;
import com.greencode.demo.dao.UsuariosRepository;
import com.greencode.demo.model.Usuario;

@SuppressWarnings("deprecation")
public class LoginControllerTest {
	
private LoginController controller;
	
	private UsuariosRepository tds;
	private HttpSession session = new HttpSession() {
		
		@Override
		public void setMaxInactiveInterval(int interval) {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public void setAttribute(String name, Object value) {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public void removeValue(String name) {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public void removeAttribute(String name) {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public void putValue(String name, Object value) {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public boolean isNew() {
			// TODO Auto-generated method stub
			return false;
		}
		
		@Override
		public void invalidate() {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public String[] getValueNames() {
			// TODO Auto-generated method stub
			return null;
		}
		
		@Override
		public Object getValue(String name) {
			// TODO Auto-generated method stub
			return null;
		}
		
		@SuppressWarnings("deprecation")
		@Override
		public HttpSessionContext getSessionContext() {
			// TODO Auto-generated method stub
			return null;
		}
		
		@Override
		public ServletContext getServletContext() {
			// TODO Auto-generated method stub
			return null;
		}
		
		@Override
		public int getMaxInactiveInterval() {
			// TODO Auto-generated method stub
			return 0;
		}
		
		@Override
		public long getLastAccessedTime() {
			// TODO Auto-generated method stub
			return 0;
		}
		
		@Override
		public String getId() {
			// TODO Auto-generated method stub
			return null;
		}
		
		@Override
		public long getCreationTime() {
			// TODO Auto-generated method stub
			return 0;
		}
		
		@Override
		public Enumeration<String> getAttributeNames() {
			// TODO Auto-generated method stub
			return null;
		}
		
		@Override
		public Object getAttribute(String name) {
			// TODO Auto-generated method stub
			return null;
		}
	};

	@Before
	public void setUP() {
		tds = Mockito.mock(UsuariosRepository.class);
		controller = new LoginController(tds);
	}

	@Test
	public void loginSucesso() {
		Usuario user = new Usuario("admin","admin");
		Mockito.when(tds.logar("admin","admin")).thenReturn(user);
		LoginController controller = new LoginController(tds);
		ResponseEntity<Usuario> resposta = controller.validarLogin(user,session);

		assertEquals(HttpStatus.OK, resposta.getStatusCode());
		assertEquals(user, resposta.getBody());
	}

	@Test
	public void loginComFalha() {

		LoginController controller = new LoginController(tds);

		ResponseEntity<Usuario> resposta = controller.validarLogin(new Usuario("login", "senha"),session);

		assertEquals(HttpStatus.UNAUTHORIZED, resposta.getStatusCode());

	}
	
	
	

}
