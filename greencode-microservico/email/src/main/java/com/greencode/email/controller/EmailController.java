package com.greencode.email.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Random;

import com.greencode.email.dao.UsuariosRepository;
import com.greencode.email.model.Usuario;

@RestController
public class EmailController {
	
	private UsuariosRepository tds;
	
    private JavaMailSender javaMailSender;	
	
	@Autowired
	public EmailController(UsuariosRepository todos, JavaMailSender javaMailSender) {
		tds = todos;
		this.javaMailSender = javaMailSender;
	}
	
	@PostMapping("/email/enviar")
	public ResponseEntity<String> enviarNovaSenha(@RequestBody String email){
		
		Random gerador = new Random();
		Usuario usuario = tds.buscarEmail(email);
		
		if(usuario != null) {
			String senha = usuario.getNome() + "N" + gerador.nextInt(101);
			tds.atualizarSenha(senha.toLowerCase(), usuario.getId());
			
			SimpleMailMessage msg = new SimpleMailMessage();
	        msg.setTo(email);
	
	        msg.setSubject("Sua Nova Senha");
	        msg.setText("Nova Senha: " + senha.toLowerCase());
	
	        javaMailSender.send(msg);
			
			return ResponseEntity.ok("Senha Alterada");
		}
		
		return ResponseEntity.ok("Email não cadastrado");
	}
}
