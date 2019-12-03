package com.greencode.maquina;

import com.greencode.maquina.gui.JPassWordFieldHint;
import com.greencode.maquina.gui.JTextFieldHint;
import com.greencode.maquina.gui.Reciclando;
import com.greencode.maquina.model.Usuario;
import com.greencode.maquina.service.Services;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Toolkit;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

/**
 *
 * @author Gustavo
 */
@SpringBootApplication
public class Application extends javax.swing.JFrame {

    /**
     * Creates new form Application
     */
    static Application ex;
    static Reciclando app = new Reciclando();
    static Usuario usuario;
    ImageIcon icon = new ImageIcon("src/main/resources/fundo-login1.jpg");
    ImageIcon icon2 = new ImageIcon("src/main/resources/btn-login.png");
    Toolkit tk = Toolkit.getDefaultToolkit();
    Dimension d = tk.getScreenSize();

    @Autowired
    Services services = new Services();

    public void recebeAnterior(Reciclando app) {
        app = app;
    }

    public Application() {
        initComponents();
        setLocationRelativeTo(null);
        ajustarDimensao();
        icon.setImage(icon.getImage().getScaledInstance(d.width, d.height, 1));
        jLabel1.setIcon(icon);
        icon2.setImage(icon2.getImage().getScaledInstance(jLabel6.getWidth(),jLabel6.getHeight(), 1));
        jLabel6.setIcon(icon2);
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
        jPanel2 = new javax.swing.JPanel();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        userName = new JTextFieldHint(new JTextField(), "", "exemplo@exemplo");
        passField = new JPassWordFieldHint(new JPasswordField(), "padlock", "*********");
        int jPanel2Altura = (d.height)-300;
        int loginText = jPanel2Altura/14;
        message = new javax.swing.JLabel();
        jLabel6 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jLabel9 = new javax.swing.JLabel();
        jLabel10 = new javax.swing.JLabel();
        jLabel11 = new javax.swing.JLabel();
        jLabel1 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setMinimumSize(new java.awt.Dimension(800, 570));
        setUndecorated(true);
        setResizable(false);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel1.setPreferredSize(new Dimension(d.width, d.height));
        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel2.setBackground(new java.awt.Color(255, 255, 255));
        jPanel2.setAlignmentY(0.5f);
        jPanel2.setPreferredSize(new Dimension((d.width/2)-250, jPanel2Altura));
        jPanel2.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel4.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(159, 157, 157), 1, true));
        jPanel2.add(jLabel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, ((jPanel2Altura/2)-jPanel2Altura/7)+44, (d.width/2)-310, -1));

        jLabel5.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(159, 157, 157), 1, true));
        jPanel2.add(jLabel5, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, ((jPanel2Altura/2)+jPanel2Altura/12)+44, (d.width/2)-310, -1));

        jLabel2.setFont(new java.awt.Font("Ubuntu", 0, loginText));
        jLabel2.setForeground(new java.awt.Color(1, 1, 1));
        jLabel2.setText("Faça Seu Login");
        jPanel2.add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 30, -1, -1));

        jLabel3.setFont(new java.awt.Font("Ubuntu", 0, jPanel2Altura/40)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(1, 1, 1));
        jLabel3.setText("E comece a ganhar pontos recilcando.");
        jPanel2.add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(32, loginText+35, -1, -1));

        userName.setBackground(new java.awt.Color(255, 255, 255));
        userName.setFont(new java.awt.Font("Ubuntu", 0, jPanel2Altura/35));
        userName.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(255, 250, 250), 1, true));
        userName.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                userNameMouseClicked(evt);
            }
        });
        userName.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                userNameActionPerformed(evt);
            }
        });
        jPanel2.add(userName, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, (jPanel2Altura/2)-jPanel2Altura/7, (d.width/2)-310, 45));

        passField.setBackground(new java.awt.Color(255, 255, 255));
        passField.setFont(new java.awt.Font("Ubuntu", 0, jPanel2Altura/35));
        passField.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(254, 254, 254)));
        passField.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                passFieldMouseClicked(evt);
            }
        });
        jPanel2.add(passField, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, (jPanel2Altura/2)+jPanel2Altura/12, (d.width/2)-310, 45));

        message.setFont(new java.awt.Font("Ubuntu", 0, jPanel2Altura/35)); // NOI18N
        message.setForeground(new java.awt.Color(227, 32, 32));
        message.setToolTipText("");
        message.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        jPanel2.add(message, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, ((jPanel2Altura/2)-jPanel2Altura/7)-70, 330, 30));
        
        // NOI18N
        jLabel6.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jLabel6.setPreferredSize(new java.awt.Dimension(jPanel2Altura/4, jPanel2Altura/13));
        jLabel6.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jLabel6MouseClicked(evt);
            }
        });
        jPanel2.add(jLabel6, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, jPanel2Altura-(jPanel2Altura/5), jPanel2Altura/3, -1));

        jLabel7.setFont(new java.awt.Font("Ubuntu", 0, jPanel2Altura/40)); // NOI18N
        jLabel7.setForeground(new java.awt.Color(146, 146, 146));
        jLabel7.setText("comece a reciclar de uma maneira divertida e diferente");
        jLabel7.setToolTipText("");
        jLabel7.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        jPanel2.add(jLabel7, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, jPanel2Altura-50, d.width-30, -1));

        jLabel8.setFont(new java.awt.Font("Ubuntu", 0, jPanel2Altura/40)); // NOI18N
        jLabel8.setForeground(new java.awt.Color(176, 173, 173));
        jLabel8.setText("Senha");
        jLabel8.setToolTipText("");
        jLabel8.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        jPanel2.add(jLabel8, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, ((jPanel2Altura/2)+jPanel2Altura/12)-24, 60, -1));

        jLabel9.setFont(new java.awt.Font("Ubuntu", 1, jPanel2Altura/40)); // NOI18N
        jLabel9.setForeground(new java.awt.Color(40, 121, 40));
        jLabel9.setText("Esqueci minha senha");
        jLabel9.setToolTipText("");
        jLabel9.setHorizontalAlignment(javax.swing.SwingConstants.RIGHT);
        jLabel9.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        jLabel9.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jLabel9.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseEntered(java.awt.event.MouseEvent evt) {
                jLabel9MouseEntered(evt);
            }
            public void mouseExited(java.awt.event.MouseEvent evt) {
                jLabel9MouseExited(evt);
            }
        });
        jPanel2.add(jLabel9, new org.netbeans.lib.awtextra.AbsoluteConstraints(-30, ((jPanel2Altura/2)+jPanel2Altura/12)+70, (d.width/2)-250, -1));

        jLabel10.setFont(new java.awt.Font("Ubuntu", 0, jPanel2Altura/40)); // NOI18N
        jLabel10.setForeground(new java.awt.Color(176, 173, 173));
        jLabel10.setText("E-mail");
        jLabel10.setToolTipText("");
        jLabel10.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        jPanel2.add(jLabel10, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, ((jPanel2Altura/2)-jPanel2Altura/7)-24, 60, -1));

        jLabel11.setFont(new java.awt.Font("Ubuntu", 0, jPanel2Altura/40)); // NOI18N
        jLabel11.setForeground(new java.awt.Color(146, 146, 146));
        jLabel11.setText("Não tem uma conta ainda? Faça já seu cadastro nosso site e");
        jLabel11.setToolTipText("");
        jLabel11.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        jPanel2.add(jLabel11, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, jPanel2Altura-70, d.width-30, -1));
        
        int y = (d.height/2) - (jPanel2Altura/2);
        
        jPanel1.add(jPanel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(30,y, -1, -1));
 
        jLabel1.setPreferredSize(new Dimension(d.width, d.height));
        jPanel1.add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, -1, -1));

        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 800, 540));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void userNameActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_userNameActionPerformed

    }//GEN-LAST:event_userNameActionPerformed

    private void jLabel6MouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLabel6MouseClicked
        if (logou()) {
            app.setBemVindo(usuario.getNome());
            setVisible(false);
            app.recebeAnterior(ex,usuario);
            app.setExtendedState(ex.MAXIMIZED_BOTH);
            app.setLocationRelativeTo(null);  
            app.setLocationRelativeTo(null);
            app.recebeAnterior(ex, usuario);
            app.setVisible(true);
        } else {
            message.setText("Usuário ou Senha Incorreto");
        }
    }//GEN-LAST:event_jLabel6MouseClicked

    private void userNameMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_userNameMouseClicked
        userName.setForeground(new Color(151, 205, 41));
        passField.setForeground(new Color(60, 60, 60));
    }//GEN-LAST:event_userNameMouseClicked

    private void passFieldMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_passFieldMouseClicked
        passField.setForeground(new Color(151, 205, 41));
        userName.setForeground(new Color(60, 60, 60));
    }//GEN-LAST:event_passFieldMouseClicked

    private void jLabel9MouseEntered(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLabel9MouseEntered
        jLabel9.setForeground(new Color(151, 205, 41));
    }//GEN-LAST:event_jLabel9MouseEntered

    private void jLabel9MouseExited(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLabel9MouseExited
        jLabel9.setForeground(new Color(40, 121, 40));
    }//GEN-LAST:event_jLabel9MouseExited

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {

        ConfigurableApplicationContext ctx = new SpringApplicationBuilder(Application.class)
                .headless(false).run(args);

        java.awt.EventQueue.invokeLater(() -> {
            ex = ctx.getBean(Application.class);
            ex.setLocationRelativeTo(null);  
            ex.setExtendedState(ex.MAXIMIZED_BOTH);
            ex.setVisible(true);
        });
    }

    public boolean logou() {

        Usuario user = new Usuario(passField.getText(), userName.getText());
        usuario = services.login(user);

        if (usuario != null) {
            return true;
        } else {
            return false;
        }
    }

    public void resetUsername() {
        userName.setText("");
        userName.requestFocus();
    }

    public void resetPassField() {
        passField.setText("");
    }

    private void ajustarDimensao() {
        jPanel1.add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, d.width, d.height));
        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, d.width, d.height));
        }
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JLabel message;
    private javax.swing.JTextField passField;
    private javax.swing.JTextField userName;
    // End of variables declaration//GEN-END:variables
}
