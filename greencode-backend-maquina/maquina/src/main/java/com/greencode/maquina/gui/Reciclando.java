/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.greencode.maquina.gui;

import com.greencode.coleta.arduino.ColetaArduino;
import com.greencode.maquina.Application;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author lucas
 */
public class Reciclando extends javax.swing.JFrame {

    static Application ex;
    int valor = 0;
    ColetaArduino arduino = new ColetaArduino();
    

    boolean bool = true;

    /**
     * Creates new form Reciclando
     */
    public Reciclando() {
        initComponents();
    }

    Thread contagem = new Thread() {

        boolean wait = false;

        @Override
        public void run() {
            while (bool) {
                wait = !wait;
                if (arduino.CapturaDados(wait)) {
                    totalReciclando.setText(String.valueOf(++valor));
                }
            }
        }
    };

    public void recebeAnterior(Application app) {
        ex = app;
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        textoReciclando = new javax.swing.JLabel();
        bemVindo = new javax.swing.JLabel();
        jPanel2 = new javax.swing.JPanel();
        jLabel6 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jPanel3 = new javax.swing.JPanel();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        jLabel11 = new javax.swing.JLabel();
        btnTerminar = new javax.swing.JLabel();
        jPanel4 = new javax.swing.JPanel();
        jLabel10 = new javax.swing.JLabel();
        totalReciclando = new javax.swing.JLabel();
        btnReciclar = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setMinimumSize(new java.awt.Dimension(635, 440));
        setResizable(false);
        setSize(new java.awt.Dimension(635, 470));
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel1.setBackground(new java.awt.Color(254, 254, 254));
        jPanel1.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(254, 254, 254), 3, true));
        jPanel1.setMaximumSize(new java.awt.Dimension(640, 440));
        jPanel1.setMinimumSize(new java.awt.Dimension(640, 440));
        jPanel1.setPreferredSize(new java.awt.Dimension(640, 440));
        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        textoReciclando.setFont(new java.awt.Font("Ubuntu", 1, 36)); // NOI18N
        textoReciclando.setForeground(new java.awt.Color(254, 254, 254));
        textoReciclando.setHorizontalAlignment(javax.swing.SwingConstants.LEFT);
        jPanel1.add(textoReciclando, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 70, 510, 50));

        bemVindo.setFont(new java.awt.Font("Ubuntu", 1, 36)); // NOI18N
        bemVindo.setForeground(new java.awt.Color(254, 254, 254));
        bemVindo.setHorizontalAlignment(javax.swing.SwingConstants.LEFT);
        jPanel1.add(bemVindo, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 30, 510, 50));

        jPanel2.setBackground(new java.awt.Color(5, 108, 84));
        jPanel2.setBorder(null);
        jPanel2.setForeground(new java.awt.Color(254, 254, 254));
        jPanel2.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel6.setFont(new java.awt.Font("Ubuntu", 1, 24)); // NOI18N
        jLabel6.setForeground(new java.awt.Color(254, 254, 254));
        jLabel6.setText("0");
        jPanel2.add(jLabel6, new org.netbeans.lib.awtextra.AbsoluteConstraints(56, 57, 92, -1));

        jLabel7.setFont(new java.awt.Font("Ubuntu", 0, 18)); // NOI18N
        jLabel7.setForeground(new java.awt.Color(254, 254, 254));
        jLabel7.setText("Seus Pontos");
        jPanel2.add(jLabel7, new org.netbeans.lib.awtextra.AbsoluteConstraints(12, 18, -1, -1));

        jLabel8.setFont(new java.awt.Font("Ubuntu", 1, 24)); // NOI18N
        jLabel8.setForeground(new java.awt.Color(254, 254, 254));
        jLabel8.setText("Pts");
        jPanel2.add(jLabel8, new org.netbeans.lib.awtextra.AbsoluteConstraints(12, 57, -1, -1));

        jPanel1.add(jPanel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 140, 230, 100));

        jPanel3.setBackground(new java.awt.Color(151, 205, 41));
        jPanel3.setBorder(null);
        jPanel3.setForeground(new java.awt.Color(254, 254, 254));
        jPanel3.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel4.setFont(new java.awt.Font("Ubuntu", 0, 18)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(254, 254, 254));
        jLabel4.setText("Total Reciclado");
        jPanel3.add(jLabel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(12, 16, -1, -1));

        jLabel5.setFont(new java.awt.Font("Ubuntu", 1, 24)); // NOI18N
        jLabel5.setForeground(new java.awt.Color(254, 254, 254));
        jLabel5.setText("Total");
        jPanel3.add(jLabel5, new org.netbeans.lib.awtextra.AbsoluteConstraints(12, 53, -1, -1));

        jLabel11.setFont(new java.awt.Font("Ubuntu", 1, 24)); // NOI18N
        jLabel11.setForeground(new java.awt.Color(254, 254, 254));
        jLabel11.setText("0");
        jPanel3.add(jLabel11, new org.netbeans.lib.awtextra.AbsoluteConstraints(80, 51, 92, 32));

        jPanel1.add(jPanel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 260, 230, 100));

        btnTerminar.setIcon(new javax.swing.ImageIcon(getClass().getResource("/btn-terminar.png"))); // NOI18N
        btnTerminar.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        btnTerminar.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                btnTerminarMouseClicked(evt);
            }
        });
        jPanel1.add(btnTerminar, new org.netbeans.lib.awtextra.AbsoluteConstraints(335, 370, 250, -1));

        jPanel4.setBackground(new java.awt.Color(255, 87, 51));
        jPanel4.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel10.setFont(new java.awt.Font("Ubuntu", 0, 18)); // NOI18N
        jLabel10.setForeground(new java.awt.Color(254, 254, 254));
        jLabel10.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel10.setText("Reciclando atualmente");
        jPanel4.add(jLabel10, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 168, 230, -1));

        totalReciclando.setFont(new java.awt.Font("Ubuntu", 1, 100)); // NOI18N
        totalReciclando.setForeground(new java.awt.Color(254, 254, 254));
        totalReciclando.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        totalReciclando.setText("0");
        jPanel4.add(totalReciclando, new org.netbeans.lib.awtextra.AbsoluteConstraints(12, 12, 206, 150));

        jPanel1.add(jPanel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 140, 230, 220));

        btnReciclar.setIcon(new javax.swing.ImageIcon(getClass().getResource("/btn-reclicar.png"))); // NOI18N
        btnReciclar.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        btnReciclar.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                btnReciclarMouseClicked(evt);
            }
        });
        jPanel1.add(btnReciclar, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 370, 240, -1));

        jLabel3.setIcon(new javax.swing.ImageIcon(getClass().getResource("/fundo-recliando-1.png"))); // NOI18N
        jLabel3.setMaximumSize(new java.awt.Dimension(635, 440));
        jLabel3.setMinimumSize(new java.awt.Dimension(635, 440));
        jLabel3.setPreferredSize(new java.awt.Dimension(635, 440));
        jPanel1.add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 640, 440));

        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 640, -1));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void btnReciclarMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_btnReciclarMouseClicked
        textoReciclando.setText("Você está reciclando...");
        bool = true;
        if(!contagem.isAlive()){
            contagem.start();
        }
    }//GEN-LAST:event_btnReciclarMouseClicked

    private void btnTerminarMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_btnTerminarMouseClicked
        bool = false;
        setVisible(false);
        ex.recebeAnterior(this);
        ex.setVisible(true);
        textoReciclando.setText("");
        ex.resetUsername();
        ex.resetPassField();
        totalReciclando.setText("0");
        valor = 0;
        bemVindo.setText("");
    }//GEN-LAST:event_btnTerminarMouseClicked

    public void setBemVindo(String nome){
        bemVindo.setText("Bem Vindo " + nome);
    }
    
    /**
     * @param args the command line arguments
     */

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel bemVindo;
    private javax.swing.JLabel btnReciclar;
    private javax.swing.JLabel btnTerminar;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JPanel jPanel4;
    private javax.swing.JLabel textoReciclando;
    private javax.swing.JLabel totalReciclando;
    // End of variables declaration//GEN-END:variables
}
