import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/navbar'

export default class SignUp extends Component {
    render(){
        return(
            <>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <article className="conteudo-esquerda col-lg-6">
                            <h1>Here you recycle in a fun way!</h1>
                            <div className="borda-separadora"></div>
                            <p>
                                Do not have an account yet ? so sign up now and start changing the world in a fun way.
                            </p>
                        </article>
                        <article className="col-lg-6">
                            <div className="formulario-login">
                                <h1>Sign Up</h1>
                                <form>
                                    <input className="caixadeentrada" type="text" placeholder="Nome Completo" />
                                    <input className="caixadeentrada" type="text" placeholder="CPF" />
                                    <input className="caixadeentrada" type="email" placeholder="Email de Acesso" />
                                    <input className="caixadeentrada" type="password" placeholder="Senha" />
                                    <input className="caixadeentrada" type="password" placeholder="Confirme Senha" />
                                    <input type="submit" value="Login" />
                                </form>
                            </div>
                        </article>
                    </div>
                    
                    <div className="espaco"></div>
                    <div className="espaco"></div>
                </div>
            </>
        )
    }
}