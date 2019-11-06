package com.greencode.demo.controller;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.greencode.demo.dao.TransacaoRepository;
import com.greencode.demo.dao.UsuariosRepository;
import com.greencode.demo.model.Produto;
import com.greencode.demo.model.Transacao;
import com.greencode.demo.model.Usuario;

@RestController
public class UsuarioController {

	private UsuariosRepository tds;
	private TransacaoRepository transacoes;
	LocalDateTime dataHora;
	
	@Autowired
	public UsuarioController(UsuariosRepository todos, TransacaoRepository transacoes) {
		tds = todos;
		this.transacoes = transacoes;
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
	public ResponseEntity<Boolean> gastar(@RequestBody List<Produto> produtos, HttpSession session){
		Usuario usuario = (Usuario) session.getAttribute("usuarioLogado");
		if(usuario != null) {
			Long usuarioId = usuario.getId();
			int pontosAtuais = tds.buscarPontosPorId(usuarioId);
			int pontosAtualizados;
			int total = 0;
			dataHora = LocalDateTime.now();
			
			for(Produto p : produtos) {
				total += p.getPreco();
			}
			
			if(pontosAtuais > total) {
				pontosAtualizados = (int) pontosAtuais - (int) total;
				
				tds.atualizarPontos(pontosAtualizados, usuarioId);
				Transacao transacao = new Transacao(dataHora,total,usuario);
				
				for(Produto p : produtos) {
					transacao.getProdutos().add(p);
					p.getTransacao().add(transacao);
				}
				System.out.println(transacao.toString());
				
				transacoes.save(transacao);
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
