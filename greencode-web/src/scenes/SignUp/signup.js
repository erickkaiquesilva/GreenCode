import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/navbar'

import { signUp } from '../../Actions/authentication'

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            cpf: '',
            email: '',
            senha: '',
            confirmeSenha: ''
        }
        
    }

    handleChange = (event) => {
        console.log(event.target.value);

        const state = Object.assign({}, this.state);

        let field = event.target.id;

        state[field] = event.target.value;

        this.setState(state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        signUp(this.state)
    }

    render(){
        console.log(this.state);
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
                                <form onSubmit={this.handleSubmit}>
                                    <input onChange={(e) => this.handleChange(e)} className="caixadeentrada" id="nome" type="text" placeholder="Nome Completo" />
                                    <input onChange={(e) => this.handleChange(e)} className="caixadeentrada" id="cpf" type="text" placeholder="CPF" />
                                    <input onChange={(e) => this.handleChange(e)} className="caixadeentrada" id="email" type="email" placeholder="Email de Acesso" />
                                    <input onChange={(e) => this.handleChange(e)} className="caixadeentrada" id="senha" type="password" placeholder="Senha" />
                                    <input onChange={(e) => this.handleChange(e)} className="caixadeentrada" id="confirmeSenha" type="password" placeholder="Confirme Senha" />
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