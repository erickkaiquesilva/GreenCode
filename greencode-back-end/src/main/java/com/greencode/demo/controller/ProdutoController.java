package com.greencode.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.greencode.demo.domain.Produto;
import com.greencode.demo.domain.ProdutoRepository;

@RestController
public class ProdutoController {
	
	private ProdutoRepository produtos;
	
	@Autowired
	public ProdutoController(ProdutoRepository produtoRepo) {
		produtos = produtoRepo;
	}
	
	@GetMapping("produto/porNome/{nome}")
	public ResponseEntity<List<Produto>> buscarPorNome(@PathVariable String nome){
		
		List<Produto> produtosAchados = produtos.porNome(nome);
		
		return ResponseEntity.ok(produtosAchados);
	}
	
	@PostMapping("produto/criar")
	public ResponseEntity<Boolean> cadastrarMaquina(@RequestBody Produto produto){
		
		produtos.save(produto);
		
		return ResponseEntity.ok(true);
	}
	
	@PostMapping("/produto/deletar")
	public ResponseEntity<Boolean> deletarEndereco(@RequestBody Produto produto){
		
		produtos.delete(produto);
		
		return ResponseEntity.ok(true);
	}
	
	@PostMapping("/produto/atualizarPreco")
	public ResponseEntity<Boolean> atualizarPreco(@RequestBody Produto produto){
		produtos.atualizarPreco(produto.getPreco(), produto.getId());
		
		
		return ResponseEntity.ok(true);
	}

}
