package com.greencode.gerarsenha;

import java.util.Arrays;
import java.util.Random;

/**
 *
 * @author Gustavo
 */
public class GerarSenha {

        PilhaObj<Character> pilha = new PilhaObj(10);
	private char[] alfabeto = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
			'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };
	private Random random = new Random();
        
	
	private Character[] montaSenha() {
		for (int i = 0; i < pilha.getVetor().length; i++) {
			if (Integer.valueOf(pilha.getVetor().length) % 2 == 0) {
				pilha.getVetor()[i] = alfabeto[random.nextInt(25)];
			}
		}
		return pilha.getVetor();
	}
	
	public Character[] inverteSenha(Character[] frase) {
		Character[] invertido = new Character[pilha.getVetor().length];
		
		for (int i = 0; i < pilha.getVetor().length; i++) {
			invertido[i] = pilha.pop();
		}
		return invertido;
	}

	public String exibeSenha(boolean bool) {
		if (pilha.isEmpty()) {
			System.out.println("Pilha vazia");
		} else {
			if (!bool) {
				for (int i = 0; i <= pilha.getVetor().length; i++) {
					return Arrays.toString(montaSenha());	
				}
			} else {
				for (int j = pilha.getVetor().length; j <= -1; j--) {
					return Arrays.toString(inverteSenha(montaSenha()));
				}
			}
		}
		return "Não foi possivel exibir a senha";
	}

}
