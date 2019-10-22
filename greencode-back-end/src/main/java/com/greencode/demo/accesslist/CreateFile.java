package com.greencode.demo.accesslist;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Formatter;
import java.util.FormatterClosedException;

public class CreateFile {
	private FileWriter arquivo = null;
	private Formatter saida = null;
	private Date atualdate = new Date();

	public void gravar(AccessList email) {
		try {
			arquivo = new FileWriter("/var/log/greencode/access-log" + atualdate + ".log");
			saida = new Formatter(arquivo);
		} catch (Exception erro) {
			System.out.println("Erro ao gerar o arquivo - " + atualdate);
			System.exit(1);
		}
		
		try {
			for (int i = 0; i < email.getTamanho(); i++) {
				saida.format("%s - acesso efetuado às: %s", email,atualdate);
			}
		} catch (FormatterClosedException erro) {
			System.out.println("ERRO AO GRAVAR O ARQUIVO - " + atualdate);
		}
		
		try {
			saida.close();
			arquivo.close();
		} catch(IOException erro) {
			System.out.println("EERO AO FECHAR O ARQUIVO - " + atualdate);
			System.exit(1);
		}
	}

}