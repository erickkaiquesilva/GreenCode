import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/navbar'

export default class SignIn extends Component {
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
                                <h1>Sign In</h1>
                                <form>
                                    <input className="caixadeentrada" type="email" placeholder="Email" />
                                    <input className="caixadeentrada" type="senha" placeholder="Senha" />
                                    <input type="submit" value="Login" />
                                </form>
                            </div>
                        </article>
                    </div>
                </div>
            </>
        )
    }
}