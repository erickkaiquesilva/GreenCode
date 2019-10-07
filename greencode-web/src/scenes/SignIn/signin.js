import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/navbar';
import { signIn } from '../../Actions/authentication';

export default class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: ''
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

        signIn(this.state)
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
                                <h1>Sign In</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <input onChange={(e) => this.handleChange(e)} className="caixadeentrada" id="email" type="email" placeholder="Email" />
                                    <input onChange={(e) => this.handleChange(e)} className="caixadeentrada" id="senha" type="password" placeholder="Senha" />
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