import React, { Component } from "react";
import { balanceMock } from "../../../Actions/requetMock";
import { balance } from "../../../Actions/resquest";
import { withRouter, Link } from "react-router-dom";

class Balance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_user: 0,
            name: "",
            lastname: "",
            recorded_points: 0,
            recorded_items: 0
        }
    }

    componentDidMount() {
        let user;
        if(localStorage.getItem('user') === null) {
            this.props.history.push("/");
        } else {
            user = JSON.parse(localStorage.getItem('user'));
            this.setState({ id_user: user.id, name: user.nome, lastname: user.sobrenome })
        }

        try {
            balance(user)
            .then((response) => {
                console.log("------ BALANCE", response.data)
                localStorage.setItem('balance', JSON.stringify(response))
                this.setState({ recorded_points: response.data })
            })
                .catch(err => console.log(err))
        } catch (err) {
            console.log("error ", err);
        }
    }

    handleClick() {
        this.state.authentication = true
        this.setState({ authentication: this.state.authentication })

        if (this.state.authentication) {
            localStorage.clear()
            const logout = localStorage.getItem('user');
            if(logout === null){
                this.props.history.push("/");
            }
        }
    };

    render() {
        console.log(this.state.authentication)
        return (
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5 informacoes-usuario">
                    <h1>{this.state.name} {this.state.lastname}</h1>
                    <div className="links-configuracoes">
                        <Link><a>Trocar a Senha</a></Link>
                        <button onClick={this.handleClick.bind(this)} className="btn-logout">Sair</button>
                    </div>
                    <div className="box-pontos">
                        <h4>Seus Pontos</h4>
                        <p>Pts {this.state.recorded_points}</p>
                    </div>
                    <div className="box-itens">
                        <h4>Qtds Itens Reciclados</h4>
                        <p>Pts {this.state.recorded_items}</p>
                    </div>

                    <button className="btn-reciclar">Reciclar</button>
                </div>
                <div className="col-lg-5 secao-objetivo">
                    <p>
                        Olá {<span className="bold">{this.state.name} {this.state.lastname}</span>}, voce é um reciclador novo por aqui.
                        Então para lhe ajuda veja seu objetivo, eles te ajudam
                        a ganha experiencia e cumprir com seus objetivos,
                        dando mais pontos e mais poder de troca.
                    </p>
                    <div className="message-objetivo">
                        <h1>Objetivo da semana.</h1>
                        <p>
                            Recicle até o sabádo 15 Garrfas Pets
                            e ganhe pontos multiplos por cada garrafa reciclada
                        </p>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        )
    }
}

export default withRouter(Balance)