import React, { Component } from "react";
import NavBar from "../../Components/NavBar/navbar";
import { signIn } from "../../Actions/resquest";
import { withRouter, Link } from "react-router-dom";


export default class SignIn extends Component {
    render() {
        return (
            <>
                <div className="container-fluid fundo-branco-neve fundo-welcome">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 message-welcome">
                            <h1>Bem Vindo Teste Teste</h1>
                            <div className="box-welcome-message">
                                <p>
                                    Voce acaba de se juntar
                                    a uma legião de pessoas
                                    que ajudam a limpar o mundo
                                    de uma maneira divertida, e diferente.
                                </p>
                            </div>
                            <Link to="/dashboard">
                                <button>Comece agora a reciclar</button>
                            </Link>
                        </div>
                        <div className="col-lg-6 banner-welcome"></div>
                    </div>
                </div>
            </>
        );
    }
}
