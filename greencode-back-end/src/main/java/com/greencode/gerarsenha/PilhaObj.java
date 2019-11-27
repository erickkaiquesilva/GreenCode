/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.greencode.gerarsenha;

public class PilhaObj {

    private char[] vetor;
    private int topo;

    public PilhaObj(int tamanho) {
        this.vetor = new char[tamanho];
        this.topo = -1;
    }

    public boolean isEmpty() {
        if (topo == -1) {
            return true;
        }
        return false;
    }

    public boolean isFull() {
        if (topo == vetor.length - 1) {
            return true;
        }
        return false;
    }

    public void push(char info) {
        if (isFull()) {
            System.out.println("Lista cheia");
        } else {
            vetor[++topo] = info;
        }
    }

    public char pop() {
        if (isEmpty()) {
            return 'n';
        } else {
            return vetor[topo--];
        }
    }

    public char peek() {
        if (isEmpty()) {
            return 'n';
        }
        return vetor[topo];
    }

    public void exibe() {
        if (isEmpty()) {
            System.out.println("Lista vazia");
        } else {
            for (int i = 0; i < topo + 1; i++) {
                System.out.println(vetor[i]);
            }
        }
    }

    public char[] getVetor() {
        return this.vetor;
    }

}
