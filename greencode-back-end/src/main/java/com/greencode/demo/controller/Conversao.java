package com.greencode.demo.controller;

public abstract class Conversao {
	
	int idTipo;
	double valorReal;
	int ponto;
	public int getIdTipo() {
		return idTipo;
	}
	public void setIdTipo(int idTipo) {
		this.idTipo = idTipo;
	}
	public double getValorReal() {
		return valorReal;
	}
	public void setValorReal(double valorReal) {
		this.valorReal = valorReal;
	}
	public int getPonto() {
		return ponto;
	}
	public void setPonto(int ponto) {
		this.ponto = ponto;
	}
	
	public abstract int convertePontos();
	
	
	
	

}
